import { Box } from "@mui/material";
import { BoxCard, BoxSpaceBetween, ButtonAdd, Content, Image, Price, Text, TitleCard } from "./style";

interface CardListProps {
    name: string;
    brand: string;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: number;
    stock: number;
}

export const CardList: React.FC<CardListProps> = ({
    name,
    brand,
    category,
    description,
    image,
    price,
    rating,
    stock,
}) => {

    function limtText(text: string, limit: number = 58): string {
        if (text.length <= limit) {
            return text;
        }

        let cut = text.substring(0, limit);

        // Procura o último espaço dentro do corte
        const lastSpace = cut.lastIndexOf(" ");

        if (lastSpace > 0) {
            cut = cut.substring(0, lastSpace);
        }

        return cut + "...";
    }

    return (
        <BoxCard>
            <Image src={image} alt={name} />
            <Content>
                <BoxSpaceBetween>
                    <Text>{category}</Text>
                    <Box display={"flex"} alignItems="center" gap="5px">
                        <img src="/icons/star.svg" alt="Meu ícone" />
                        <Text>{rating}</Text>
                    </Box>
                </BoxSpaceBetween>

                <Box>
                    <TitleCard>{name}</TitleCard>
                    <Text sx={{ fontWeight: 400, fontSize: "14px", color: "#555555", height: "60px", overflow: "hidden", textOverflow: "ellipsis" }}>{limtText(description)}</Text>
                </Box>

                <BoxSpaceBetween>
                    <Price>R$ {price}</Price>
                    <Text>{stock} em estoque</Text>
                </BoxSpaceBetween>

                <ButtonAdd fullWidth variant="contained">
                    <img src="/icons/cart.svg" alt="carrinho" />
                    Adicionar
                </ButtonAdd>
            </Content>
        </BoxCard>
    );
}