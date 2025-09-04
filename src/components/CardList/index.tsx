import { Box } from "@mui/material";
import { BoxCard, BoxSpaceBetween, ButtonAdd, Content, Image, Price, Text, TitleCard } from "./style";
import { useRouter } from "next/navigation";

interface CardListProps {
    name: string;
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    rating: number;
    stock: number;
}

export const CardList: React.FC<CardListProps> = ({
    name,
    id,
    category,
    description,
    image,
    price,
    rating,
    stock,
}) => {
    const router = useRouter();

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

    console.log(image);

    return (
        <BoxCard onClick={() => router.push(`/product/${id}`)}>
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