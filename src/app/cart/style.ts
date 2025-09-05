import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const BoxNavigation = styled(Box)`
    display: flex;
    align-items: center;
    cursor: pointer;
    width: fit-content;
    margin: 30px 0 30px;
`;

export const TextBack = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #737380;
    margin-left: 5px;
`;

export const Title = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 600;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    text-transform: uppercase;
    color: #41414D;
    margin-bottom: 8px;
`;

export const TextCart = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #737380;
    margin-bottom: 20px;

    span {
        font-family: '${inter.style.fontFamily}', sans-serif;
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;
    }
`;