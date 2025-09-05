import styled from "@emotion/styled";
import { Box, Typography, Button } from "@mui/material";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] });

export const OrderSummaryContainer = styled(Box)`
    background: #FFF;
    border-radius: 8px;
    padding: 24px;
    margin-top: 35px;
    height: fit-content;
    max-height: 700px;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Title = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    color: #41414D;
    margin-bottom: 24px;
`;

export const SummaryItem = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    
    & > p {
        font-family: '${inter.style.fontFamily}', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #41414D;
        margin: 0;
    }
`;

export const TotalItem = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & > p {
        font-family: '${inter.style.fontFamily}', sans-serif;
        font-size: 16px;
        line-height: 150%;
        color: #41414D;
        margin: 0;
        font-weight: 600;
    }
`;

export const CheckoutButton = styled(Button)`
    background-color: #388E3C !important;
    color: #FFF !important;
    font-family: '${inter.style.fontFamily}', sans-serif !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    line-height: 150% !important;
    text-transform: none !important;
    border-radius: 4px !important;
    padding: 12px 24px !important;
    margin-bottom: 24px !important;
    height: 44px !important;
    
    &:hover {
        background-color: #2E7D32 !important;
    }
`;

export const HelpSection = styled(Box)`
    margin-top: auto;
`;

export const HelpLink = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #737380;
    cursor: pointer;
    text-decoration: underline;
    
    &:hover {
        color: #41414D;
    }
`;

export const SummaryBox = styled(Box)`
    margin-bottom: 24px;
`;

export const DividerBox = styled(Box)`
    border-top: 1px solid #E6E6E6;
    margin-top: 16px;
    padding-top: 16px;
`;

export const HelpLinksContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;