"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ListItemText, CircularProgress } from '@mui/material';
import { useRouter } from 'next/navigation';
import { SearchAutocompleteContainer, SearchInput, SuggestionsList, SuggestionItem, LoadingContainer } from './styles';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  stock: number;
}

interface SearchAutocompleteProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const SearchAutocomplete: React.FC<SearchAutocompleteProps> = ({ 
  placeholder = "Procurando por algo específico?",
  onSearch 
}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const searchProducts = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`https://api.insany.co/api/products?q=${encodeURIComponent(searchQuery)}&limit=5`);
      const data = await response.json();
      setSuggestions(data.products || []);
      setShowSuggestions(true);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      setSuggestions([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      searchProducts(query);
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    setSelectedIndex(-1);
    
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleSuggestionClick = (product: Product) => {
    setQuery(product.name);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    router.push(`/product/${product.id}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!showSuggestions || suggestions.length === 0) return;

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        event.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        event.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSuggestionClick(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleInputFocus = () => {
    if (suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  return (
    <SearchAutocompleteContainer>
      <SearchInput
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={handleInputFocus}
        placeholder={placeholder}
        autoComplete="off"
      />
      
      {showSuggestions && (
        <SuggestionsList ref={suggestionsRef}>
          {loading ? (
            <LoadingContainer>
              <CircularProgress size={20} />
            </LoadingContainer>
          ) : suggestions.length > 0 ? (
            suggestions.map((product, index) => (
              <SuggestionItem
                key={product.id}
                onClick={() => handleSuggestionClick(product)}
                selected={index === selectedIndex}
              >
                <ListItemText 
                  primary={product.name}
                  secondary={`R$ ${product.price.toFixed(2)}`}
                />
              </SuggestionItem>
            ))
          ) : query.trim() && (
            <SuggestionItem>
              <ListItemText primary="Nenhum produto encontrado" />
            </SuggestionItem>
          )}
        </SuggestionsList>
      )}
    </SearchAutocompleteContainer>
  );
};
