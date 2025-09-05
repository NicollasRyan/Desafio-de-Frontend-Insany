import { Box } from "@mui/material";
import { BoxCard, BoxSpaceBetween, ButtonAdd, Content, Image, Price, Text, TextLimit, TitleCard } from "./style";
import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";

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
    const { addToCart } = useCart();

    function limtText(text: string, limit: number = 58): string {
        if (text.length <= limit) {
            return text;
        }

        let cut = text.substring(0, limit);

        const lastSpace = cut.lastIndexOf(" ");

        if (lastSpace > 0) {
            cut = cut.substring(0, lastSpace);
        }

        return cut + "...";
    }

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation(); 
        addToCart({
            id: id.toString(),
            name,
            price,
            image,
            description,
            stock
        });
    };

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
                    <TextLimit>{limtText(description)}</TextLimit>
                </Box>

                <BoxSpaceBetween>
                    <Price>R$ {price}</Price>
                    <Text>{stock} em estoque</Text>
                </BoxSpaceBetween>

                <ButtonAdd 
                    fullWidth 
                    variant="contained"
                    onClick={handleAddToCart}
                    disabled={stock === 0}
                >
                    <img src="/icons/cart.svg" alt="carrinho" />
                    {stock === 0 ? 'Sem estoque' : 'Adicionar'}
                </ButtonAdd>
            </Content>
        </BoxCard>
    );
}