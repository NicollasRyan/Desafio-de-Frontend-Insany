"use client"

import { Container, IconButton, Typography, useMediaQuery } from "@mui/material"
import { BoxHeader, BoxSearch, ContentHeader, SearchContainer, StyleBadge, StyleIconButton } from "./styles"
import { useRouter } from "next/navigation"
import { useCart } from "@/contexts/CartContext"
import { SearchAutocomplete } from "@/components/SearchAutocomplete"

export const Header = () => {
    const router = useRouter();
    const { getTotalItems } = useCart();
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <ContentHeader>
            <Container>
                <BoxHeader>
                    <Typography>
                        InsanyShop
                    </Typography>

                    <BoxSearch>
                        {!isMobile && (
                            <SearchContainer>
                                <SearchAutocomplete placeholder="Procurando por algo específico?" />
                                <img src="/icons/search-loupe.svg" alt="Buscar"
                                />
                            </SearchContainer>
                        )}
                        <StyleIconButton onClick={() => router.push('/cart')}>
                            <StyleBadge
                                badgeContent={getTotalItems()}
                                color="error"
                            >
                                <img src="/icons/shopping-bag.svg" alt="Carrinho" />
                            </StyleBadge>
                        </StyleIconButton>
                    </BoxSearch>
                </BoxHeader>
                {isMobile && (
                    <SearchContainer>
                        <SearchAutocomplete placeholder="Procurando por algo específico?" />
                        <img src="/icons/search-loupe.svg" alt="Buscar"
                        />
                    </SearchContainer>
                )}
            </Container>
        </ContentHeader>
    )
} 