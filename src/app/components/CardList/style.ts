import { Box, Button, Typography } from "@mui/material";

import Link from "next/link";
import styled from "@emotion/styled";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const BoxCard = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 291px;
    left: 160px;
    justify-content: space-between;
    opacity: 1;
    border-width: 1px;
`;

export const Image = styled.img`
    max-width: 373.33px;
    width: 100%;
    height: 270px;
    border-radius: 19px 19px 0 0 ;
    object-fit: cover;
    object-position: center;
    display: block;
    position: relative;
    overflow: hidden;
`;

export const Content = styled(Box)`
    max-width: 373.33px;
    width: 100%;
    min-height: 266px;
    opacity: 1;
    gap: 15px;
    border: solid 1px;
    padding-top: 20px;
    padding-right: 21px;
    padding-bottom: 28px;
    padding-left: 21px;
    border-radius: 0 0 19px 19px ;
    background-color: #FFF;
    border: 1px solid #E6E6E6;
`;

export const Text = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 400;
    font-style: Regular;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
`;

export const TitleCard = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 700;
    font-style: Bold;
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    margin: 16px 0 8px 0;
`;

export const Price = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    color: #1B9847;
    font-weight: 700;
    font-style: bold;
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
`;

export const BoxSpaceBetween = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export const ButtonAdd = styled(Button)`
    margin-top: 16px;
    opacity: 1;
    border-radius: 4px;
    background-color: #000;
    gap: 16px;
    padding-top: 8px;
    padding-bottom: 8px;
`;

