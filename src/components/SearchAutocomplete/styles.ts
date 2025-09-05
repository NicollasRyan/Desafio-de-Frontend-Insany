import styled from "@emotion/styled";
import { Box, ListItem } from "@mui/material";

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const SearchAutocompleteContainer = styled(Box)`
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  padding-right: 40px;
  border: none;
  border-radius: 8px;
  background: #F1F6FF;
  font-size: 14px;
  font-family: '${inter.style.fontFamily}', sans-serif;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: #9CA3AF;
    font-family: '${inter.style.fontFamily}', sans-serif;
  }

  &:focus {
    background: #E8F2FF;
  }
`;

export const SuggestionsList = styled(Box)`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
  margin-top: 4px;
`;

export const SuggestionItem = styled(ListItem)<{ selected?: boolean }>`
  cursor: pointer;
  padding: 12px 16px;
  border-bottom: 1px solid #F3F4F6;
  background: ${props => props.selected ? '#F1F6FF' : 'white'};
  transition: background-color 0.2s ease;

  &:hover {
    background: #F1F6FF;
  }

  &:last-child {
    border-bottom: none;
  }

  .MuiListItemText-primary {
    font-size: 14px;
    font-weight: 500;
    color: #374151;
    font-family: '${inter.style.fontFamily}', sans-serif;
  }

  .MuiListItemText-secondary {
    font-size: 12px;
    color: #6B7280;
    font-family: '${inter.style.fontFamily}', sans-serif;
  }
`;

export const LoadingContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
