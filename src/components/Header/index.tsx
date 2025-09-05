"use client"

import { Box, Container, IconButton, InputAdornment, Typography, Badge } from "@mui/material"
import { BoxHeader, ContentHeader, InputSearch } from "./styles"
import { useRouter } from "next/navigation"
import { useCart } from "@/contexts/CartContext"

export const Header = () => {
    const router = useRouter();
    const { getTotalItems } = useCart();

    return (
        <ContentHeader>
            <Container>
                <BoxHeader>
                    <Typography>
                        InsanyShop
                    </Typography>

                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        gap: { xs: '8px', md: '16px' },
                        width: { xs: '100%', md: 'auto' }
                    }}>
                        <InputSearch
                            size="small"
                            fullWidth
                            placeholder="Procurando por algo específico?"
                            slotProps={{
                                input: {
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <img src="/icons/search-loupe.svg" alt="Meu ícone" />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                            sx={{
                                width: { xs: '100%', md: '352px' }
                            }}
                        />
                        <IconButton 
                            onClick={() => router.push('/cart')}
                            sx={{ 
                                marginLeft: { xs: '0', md: '16px' },
                                minWidth: 'auto'
                            }}
                        >
                            <Badge 
                                badgeContent={getTotalItems()} 
                                color="error"
                                sx={{
                                    '& .MuiBadge-badge': {
                                        backgroundColor: '#DE3838',
                                        color: '#FFF',
                                        fontSize: '12px',
                                        fontWeight: 500,
                                        minWidth: '18px',
                                        height: '18px',
                                        borderRadius: '50%',
                                        top: '19px',
                                        right: '-1px',
                                        '@media (max-width: 768px)': {
                                            top: '12px',
                                            right: '2px',
                                            minWidth: '16px',
                                            height: '16px',
                                            fontSize: '10px',
                                        }
                                    }
                                }}
                            >
                                <img src="/icons/shopping-bag.svg" alt="Carrinho" />
                            </Badge>
                        </IconButton>
                    </Box>
                </BoxHeader>
            </Container>
        </ContentHeader>
    )
} 