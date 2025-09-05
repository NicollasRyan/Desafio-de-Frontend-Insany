"use client";

import { Box, Container, Grid } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BoxNavigation, ButtonAdd, ContentDetail, ContentQuite, Image, TextBack, TextDetail, TextPrice, TextSubTitle, TitleDetail, TopContent } from "./styles";

export default function Product() {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();

    const [product, setProduct] = useState<any>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://api.insany.co/api/products/${id}`);
                const data = await response.json();
                setProduct(data.product);
            } catch (error) {
                console.error("Erro ao buscar produto:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) fetchProduct();
    }, [id]);

    return (
        <Container>
            <BoxNavigation onClick={() => router.push('/')}>
                <img src="/icons/arrow-back.svg" alt="" /> <TextBack>Voltar</TextBack>
            </BoxNavigation>
            <Grid container spacing={4} marginBottom="60px">
                {loading ? (
                    <p>Carregando...</p>
                ) : product ? (
                    <>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            {product && product.image && (
                                <Image src={product.image} alt={product.name} />
                            )}

                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <ContentDetail>
                                <TopContent>
                                    <TextSubTitle className="textSubTitle">{product.category}</TextSubTitle>
                                    <TitleDetail>{product.name}</TitleDetail>
                                    <TextPrice>R$ {product.price}</TextPrice>
                                </TopContent>
                                <ContentQuite>
                                    <TextSubTitle className="textSubTitle">Descrição</TextSubTitle>
                                    <TextDetail>{product.description}</TextDetail>
                                </ContentQuite>
                                <ButtonAdd fullWidth variant="contained">
                                    <img src="/icons/cart.svg" alt="carrinho" />
                                    Adicionar
                                </ButtonAdd>
                            </ContentDetail>
                        </Grid>
                    </>
                ) : (
                    <p>Produto não encontrado.</p>
                )}
            </Grid>
        </Container>
    );
}    