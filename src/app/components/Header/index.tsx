"use client"

import { Box, Container, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import { BoxHeader, ContentHeader, InputSearch } from "./styles"

export const Header = () => {
    return (
        <ContentHeader>
            <Container>
                <BoxHeader>
                    <Typography>
                        InsanyShop
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                        />
                        <IconButton>
                            <img src="/icons/shopping-bag.svg" alt="Meu ícone" />
                        </IconButton>
                    </Box>
                </BoxHeader>
            </Container>
        </ContentHeader>
    )
} 