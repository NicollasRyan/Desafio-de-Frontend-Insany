"use client";

import { Box, Container, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { BoxNavigation, TextBack, TextCart, Title } from "./style";
import { CardCart } from "@/components/CardCart";
import { OrderSummary } from "@/components/OrderSummary";
import { useCart } from "@/contexts/CartContext";

export default function Cart() {
    const router = useRouter();
    const { cartItems, getTotalItems, getTotalPrice } = useCart();

    return (
        <Container>
            <Grid container spacing={4} marginBottom="60px">
                <Grid size={{md: 8, xs: 12}}>
                    <BoxNavigation onClick={() => router.push('/')}>
                        <img src="/icons/arrow-back.svg" alt="" /> <TextBack>Voltar</TextBack>
                    </BoxNavigation>
                    <Title>SEU CARRINHO</Title>
                    <TextCart>
                        Total ({getTotalItems()} produtos) R$ {getTotalPrice().toFixed(2).replace('.', ',')}
                    </TextCart>

                    {cartItems.length === 0 ? (
                        <TextCart>Seu carrinho está vazio</TextCart>
                    ) : (
                        cartItems.map((item) => (
                            <CardCart key={item.id} item={item} />
                        ))
                    )}
                </Grid>
                <Grid size={{md: 4, xs: 12}}>
                    <OrderSummary />
                </Grid>
            </Grid>
        </Container>
    );
}