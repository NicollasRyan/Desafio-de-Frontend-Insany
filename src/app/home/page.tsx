"use client";

import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Pagination, Select, Typography } from "@mui/material";
import { CardCategores, GridCategores, OrganizeBox, PaginationStyled, Title, TitleCategores } from "./styles";
import { useEffect, useState } from "react";
import { CardList } from "../components/CardList";

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalProducts: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: number;
  stock: number;
}

export interface ProductsResponse {
  pagination: Pagination;
  products: Product[];
}


export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const categores = [...new Set(products.map(p => p.category))];

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as string);
  };

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://api.insany.co/api/products?page=${page}`);
        const data = await response.json();
        setProducts(data.products);
        setPagination(data.pagination);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  console.log("=>", products);
  console.log("2", pagination);
  console.log("3", page);

  return (
    <Container>
      <OrganizeBox>
        <Typography>Selecione a categoria</Typography>
        <Typography>Organizar por</Typography>
      </OrganizeBox>
      <Title>Todos os produtos</Title>
      <Grid container spacing={2}>
        {loading ? (
          <Typography>Carregando produtos...</Typography>
        ) : (
          products?.map((product, index) => (
            <Grid size={4} key={index}>
              <CardList
                name={product.name}
                brand={product.brand}
                category={product.category}
                description={product.description}
                image={product.image}
                price={product.price}
                rating={product.rating}
                stock={product.stock}
              />
            </Grid>
          ))
        )}
      </Grid>
      {pagination && (
        <Box display="flex" justifyContent="center">
          <PaginationStyled
            count={pagination.totalPages}
            page={page}
            onChange={handlePageChange}
            size="large"
          />
        </Box>
      )}
      <TitleCategores>Principais categorias</TitleCategores>
      <GridCategores container spacing={2}>
        {categores.map((category, index) => (
          <Grid key={index}>
            <CardCategores>
              <Typography className="title">{category}</Typography>
              <Typography className="text">{category.length} produtos</Typography>
            </CardCategores>
          </Grid>
        ))}
      </GridCategores>
    </Container>
  );
}
