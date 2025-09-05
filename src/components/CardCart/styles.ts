import styled from "@emotion/styled";
import { Box, Typography, Select } from "@mui/material";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['700'] });

export const BoxCart = styled(Box)`
    display: flex;
    width: 100%;
    border: 1px solid #E6E6E6;
    border-radius: 19px;
    gap: 10px;
    margin-top: 20px;
    background-color: #FFF;
    min-height: 211px;
`;

export const BoxCartContent = styled(Box)`
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 20px;
`;

export const TitleCart = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 300;
    font-style: Light;
    font-size: 20px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #41414D;
`;

export const Image = styled.img`
    max-width: 256px;
    width: 100%;
    height: 211px;
    border-radius: 19px 0 0 19px;
    object-fit: cover;
    object-position: center;
    display: block;
    position: relative;
    overflow: hidden;
`;

export const BoxSpaceBetween = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const BoxMargin = styled(Box)`
    margin: 8px 0 0 0;
    flex: 1;
`;

export const Text = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-family: Inter;
    font-weight: 400;
    font-size: 12px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #41414D;
`;

export const TextPrice = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 600;
    font-size: 16px;
    leading-trim: NONE;
    line-height: 150%;
    letter-spacing: 0%;
    text-align: right;
    vertical-align: middle;
    color: #09090A;
`;

export const QuantitySelect = styled(Select)`
    background-color: #F3F5F6;
    border: 1px solid #E6E6E6;
    border-radius: 8px;
    min-width: 80px;
    height: 40px;
    
    & .MuiSelect-select {
        padding: 8px 12px;
        font-family: '${inter.style.fontFamily}', sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: #41414D;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    & .MuiOutlinedInput-notchedOutline {
        border: none;
    }
    
    &:hover .MuiOutlinedInput-notchedOutline {
        border: none;
    }
    
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border: 2px solid #3B82F6;
        border-radius: 8px;
    }
    
    & .MuiSelect-icon {
        color: #737380;
        right: 8px;
    }
`;

export const BottomSection = styled(Box)`
    margin-top: auto;
    padding-top: 16px;
`;