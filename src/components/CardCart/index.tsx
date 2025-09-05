"use client";

import { IconButton, MenuItem, FormControl } from "@mui/material";
import { TitleCart, Image, BoxSpaceBetween, BoxCart, BoxCartContent, Text, TextPrice, BoxMargin, QuantitySelect, BottomSection } from "./styles";
import { useCart, CartItem } from "@/contexts/CartContext";

interface CardCartProps {
    item: CartItem;
}

export const CardCart = ({ item }: CardCartProps) => {
    const { updateQuantity, removeFromCart } = useCart();

    const handleQuantityChange = (newQuantity: number) => {
        updateQuantity(item.id, newQuantity);
    };

    const handleRemove = () => {
        removeFromCart(item.id);
    };

    return (
        <BoxCart>
            <Image src={item.image} alt={item.name} />
            <BoxCartContent>
                <BoxSpaceBetween>
                    <TitleCart>{item.name}</TitleCart>
                    <IconButton onClick={handleRemove}>
                        <img src="/icons/delete.svg" alt="Remover item" />
                    </IconButton>
                </BoxSpaceBetween>
                <BoxMargin>
                    <Text>{item.description}</Text>
                </BoxMargin>
                <BottomSection>
                    <BoxSpaceBetween>
                        <FormControl size="small">
                            <QuantitySelect
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(Number(e.target.value))}
                                displayEmpty
                            >
                                {Array.from({ length: item.stock }, (_, i) => i + 1).map((num) => (
                                    <MenuItem key={num} value={num}>
                                        {num}
                                    </MenuItem>
                                ))}
                            </QuantitySelect>
                        </FormControl>
                        <TextPrice>R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</TextPrice>
                    </BoxSpaceBetween>
                </BottomSection>
            </BoxCartContent>
        </BoxCart>
    );
};
