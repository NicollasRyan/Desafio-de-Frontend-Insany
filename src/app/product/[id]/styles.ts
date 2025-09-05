import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
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
    font-style: Medium;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    color: #737380;
    margin-left: 5px;
`;

export const Image = styled.img`
    max-width: 640px;
    width: 100%;
    height: 580px;
    height: 100%;
    border-radius: 4px;
    object-fit: contain;
    object-position: center;
    display: block;
    position: relative;
    overflow: hidden;
`;

export const TopContent = styled(Box)`
    .textSubTitle {
        margin-bottom: 10px;
    }
`;

export const ContentQuite = styled(Box)`
    .textSubTitle {
        margin-bottom: 20px;
        color: #737380;
    }
`;

export const TextSubTitle = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 400; 
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #41414D;
`;

export const TitleDetail = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 300;
    font-style: Light;
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #41414D;
`;

export const TextPrice = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #46AB6A;
`;

export const TextDetail = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #41414D;
    margin-bottom: 120px;
`;

export const ButtonAdd = styled(Button)`
    opacity: 1;
    border-radius: 4px;
    background-color: #000;
    gap: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
`;