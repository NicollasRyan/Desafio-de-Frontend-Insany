"use client";

import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import { CardCategores, DropdownButton, DropdownContainer, DropdownItem, DropdownList, GridCategores, OrganizeBox, PaginationStyled, Title, TitleCategores } from "./styles";
import { useEffect, useState } from "react";
import { CardList } from "../components/CardList";
import { useRouter } from "next/navigation";

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
  const [openCategores, setOpenCategores] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  const [sortOrder, setSortOrder] = useState<string>("");
  const [page, setPage] = useState(1);

  const router = useRouter();

  const categores = [...new Set(products.map(p => p.category))];

  const handleSelect = (category: string) => {
    setOpenCategores(false);
    router.push(`/category/${category}`);
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

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOrder) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "new":
        return b.id - a.id;
      case "bestseller":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <Container>
      <OrganizeBox>
        <DropdownContainer>
          <DropdownButton onClick={() => setOpenCategores(prev => !prev)}>
            <Typography className="text">Selecione a categoria</Typography>
            <img src="/icons/arrow.svg" />
          </DropdownButton>

          {openCategores && (
            <DropdownList>
              {categores.map((category) => (
                <DropdownItem key={category}
                  onClick={() => handleSelect(category)}
                >
                  <Typography className="text">
                    {category}
                  </Typography>
                </DropdownItem>
              ))}
            </DropdownList>
          )}
        </DropdownContainer>

        <DropdownContainer>
          <DropdownButton onClick={() => setOpenOrder(prev => !prev)}>
            <Typography className="text">Ordenar por</Typography>
            <img src="/icons/arrow.svg" />
          </DropdownButton>

          {openOrder && (
            <DropdownList>
              <DropdownItem onClick={() => setSortOrder("new")}>
                <Typography className="text">Novidade</Typography>
              </DropdownItem>
              <DropdownItem onClick={() => setSortOrder("price-desc")}>
                <Typography className="text">Preço: Maior-menor</Typography>
              </DropdownItem>
              <DropdownItem onClick={() => setSortOrder("price-asc")}>
                <Typography className="text">Preço: Menor-maior</Typography>
              </DropdownItem>
              <DropdownItem onClick={() => setSortOrder("bestseller")}>
                <Typography className="text">Mais Vendidos</Typography>
              </DropdownItem>
            </DropdownList>
          )}
        </DropdownContainer>
      </OrganizeBox>
      <Title>Todos os produtos</Title>
      <Grid container spacing={2}>
        {loading ? (
          <Typography>Carregando produtos...</Typography>
        ) : (
          sortedProducts?.map((product, index) => (
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
