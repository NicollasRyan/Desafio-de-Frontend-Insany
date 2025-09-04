"use client";

import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { TypePagination, TypeProduct } from "../../home/page";
import { useParams, useRouter } from "next/navigation";
import { CardList } from "../../../components/CardList";
import { OrganizeBox, DropdownContainer, DropdownButton, DropdownList, DropdownItem, TextCategory, BoxNavigation, Text, Title, Summary, PaginationStyled } from "./styles";

export default function Category() {
    const [products, setProducts] = useState<TypeProduct[]>([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState<TypePagination | null>(null);
    const [sortOrder, setSortOrder] = useState<string>("");
    const [openOrder, setOpenOrder] = useState(false);
    const [page, setPage] = useState(1);
    const params = useParams<{ category: string }>();
    const router = useRouter();

    const name = params.category;

    useEffect(() => {
        if (!name) return;

        const fetchProducts = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://api.insany.co/api/products?category=${name}`);
                const data = await res.json();
                setProducts(data.products);
                setPagination(data.pagination);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, [name]);

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

    const resproductsSummary = (product: string) => {
        if (product === "eletronicos") {
            return "Smartphones, laptops, consoles e mais";
        } else if (product === "roupas") {
            return "Camisetas, calças, vestidos e mais";
        } else if (product === "casa") {
            return "Sofás, mesas, cadeiras e mais";
        }
    };

    const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

    console.log(products);

    return (
        <Container>
            <OrganizeBox>
                <BoxNavigation onClick={() => router.push('/')}>
                    <Text>
                        Produtos / <TextCategory>{name}</TextCategory>
                    </Text>
                </BoxNavigation>

                <DropdownContainer>
                    <DropdownButton onClick={() => setOpenOrder(prev => !prev)}>
                        <Typography className="text">Ordenar por</Typography>
                        <img src="/icons/arrow.svg" alt="Arrow" />
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

            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", m: "50px 0" }}>
                <Title>{name}</Title>
                <Summary>{resproductsSummary(name)}</Summary>
            </Box>

            <Grid container spacing={2} style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                {sortedProducts.map((p, index) => (
                    <Grid size={4} key={index}>
                        <CardList
                            name={p.name}
                            id={p.id}
                            category={p.category}
                            description={p.description}
                            image={p.image}
                            price={p.price}
                            rating={p.rating}
                            stock={p.stock}
                        />
                    </Grid>
                ))}
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
        </Container>
    )
}