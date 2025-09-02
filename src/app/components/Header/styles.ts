import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";

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

    p {
        font-family: '${inter.style.fontFamily}', sans-serif;
        font-weight: 700;
        font-style: Bold;
        font-size: 40px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;
        color: #5D5D6D;
    }

    button {
        margin-left: 16px;
    }
`;


export const InputSearch = styled(TextField)`
    background: #F1F6FF;
    border-radius: 8px;
    width: 352px;
  & .MuiOutlinedInput-root {
    padding-right: 2;
  }

  & .MuiOutlinedInput-notchedOutline {
    border: none;
  }
`;

