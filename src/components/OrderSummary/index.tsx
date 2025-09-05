"use client";

import { Box, Typography } from "@mui/material";
import { 
    OrderSummaryContainer, 
    Title, 
    SummaryItem, 
    TotalItem, 
    CheckoutButton,
    HelpSection,
    HelpLink,
    SummaryBox,
    DividerBox,
    HelpLinksContainer
} from "./styles";
import { useCart } from "@/contexts/CartContext";

export const OrderSummary = () => {
    const { getTotalPrice, cartItems } = useCart();
    
    const subtotal = getTotalPrice();
    const delivery = subtotal > 0 ? 40 : 0; // Frete grátis acima de R$ 0 (ou pode ser configurado)
    const total = subtotal + delivery;

    return (
        <OrderSummaryContainer>
            <Box>
                <Title>RESUMO DO PEDIDO</Title>
                
                <SummaryBox>
                    <SummaryItem>
                        <Typography>Subtotal de produtos</Typography>
                        <Typography>R$ {subtotal.toFixed(2).replace('.', ',')}</Typography>
                    </SummaryItem>
                    
                    <SummaryItem>
                        <Typography>Entrega</Typography>
                        <Typography>
                            {delivery > 0 ? `R$ ${delivery.toFixed(2).replace('.', ',')}` : 'Grátis'}
                        </Typography>
                    </SummaryItem>
                    
                    <DividerBox>
                        <TotalItem>
                            <Typography>Total</Typography>
                            <Typography>R$ {total.toFixed(2).replace('.', ',')}</Typography>
                        </TotalItem>
                    </DividerBox>
                </SummaryBox>
                
                <CheckoutButton 
                    variant="contained" 
                    fullWidth
                    disabled={cartItems.length === 0}
                >
                    FINALIZAR A COMPRA
                </CheckoutButton>
            </Box>
            
            <HelpSection>
                <HelpLinksContainer>
                    <HelpLink>AJUDA</HelpLink>
                    <HelpLink>REEMBOLSOS</HelpLink>
                    <HelpLink>ENTREGAS E FRETE</HelpLink>
                    <HelpLink>TROCAS E DEVOLUÇÕES</HelpLink>
                </HelpLinksContainer>
            </HelpSection>
        </OrderSummaryContainer>
    );
};
