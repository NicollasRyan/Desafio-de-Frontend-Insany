"use client";

import { Box, Typography } from "@mui/material";
import { 
    OrderSummaryContainer, 
    Title, 
    SummaryItem, 
    TotalItem, 
    CheckoutButton,
    HelpSection,
    HelpLink
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
                
                <Box sx={{ marginBottom: "24px" }}>
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
                    
                    <Box sx={{ 
                        borderTop: "1px solid #E6E6E6", 
                        marginTop: "16px", 
                        paddingTop: "16px" 
                    }}>
                        <TotalItem>
                            <Typography>Total</Typography>
                            <Typography>R$ {total.toFixed(2).replace('.', ',')}</Typography>
                        </TotalItem>
                    </Box>
                </Box>
                
                <CheckoutButton 
                    variant="contained" 
                    fullWidth
                    disabled={cartItems.length === 0}
                >
                    FINALIZAR A COMPRA
                </CheckoutButton>
            </Box>
            
            <HelpSection>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <HelpLink>AJUDA</HelpLink>
                    <HelpLink>REEMBOLSOS</HelpLink>
                    <HelpLink>ENTREGAS E FRETE</HelpLink>
                    <HelpLink>TROCAS E DEVOLUÇÕES</HelpLink>
                </Box>
            </HelpSection>
        </OrderSummaryContainer>
    );
};
