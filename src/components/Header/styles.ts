import styled from "@emotion/styled";
import { Badge, Box, IconButton } from "@mui/material";

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const ContentHeader = styled(Box)`
    padding: 10px 0;
    background: #FFF;
`;

export const BoxHeader = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;

    p {
        font-family: '${inter.style.fontFamily}', sans-serif;
        font-weight: 700;
        font-size: 40px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;
        color: #5D5D6D;
        
        @media (max-width: 768px) {
            font-size: 28px;
        }
    }

    button {
        margin-left: 16px;
    }
`;

export const BoxSearch = styled(Box)`
    display: flex;
    align-items: center;
    gap: 16px;

    @media (max-width: 768px) {
        gap: 8px;
    }
`;

export const StyleBadge = styled(Badge)`
    & .MuiBadge-badge {
        background-color: #DE3838;
        color: #FFF;
        font-size: 12px;
        font-weight: 500;
        min-width: 18px;
        height: 18px;
        border-radius: 50%;
        top: 19px;
        right: -1px;
        
        @media (max-width: 768px) {
            top: 12px;
            right: 2px;
            min-width: 16px;
            height: 16px;
            font-size: 10px;
        }
    }
`;

export const StyleIconButton = styled(IconButton)`
    margin-left: 16px;
    position: relative;
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }

    @media (max-width: 768px) {
        margin-left: 8px;
        min-width: auto;
    }
`;

export const SearchContainer = styled(Box)`
    position: relative;
    width: 352px;

    img {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
        width: 20px;
        height: 20px;
    }
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 280px;
    }
`;

export const CartButton = styled(IconButton)`
    margin-left: 16px;
    position: relative;
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }
`;

