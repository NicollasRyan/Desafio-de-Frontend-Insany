import styled from "@emotion/styled";
import { Box, TextField, IconButton } from "@mui/material";

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
        font-style: Bold;
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


export const InputSearch = styled(TextField)`
    background: #F1F6FF;
    border-radius: 8px;
    width: 352px;
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 280px;
    }
    
  & .MuiOutlinedInput-root {
    padding-right: 2;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

export const CartButton = styled(IconButton)`
    margin-left: 16px;
    position: relative;
    
    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
    }
`;

