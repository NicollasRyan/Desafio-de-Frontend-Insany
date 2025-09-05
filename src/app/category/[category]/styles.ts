import styled from "@emotion/styled";
import { Box, Pagination, Typography } from "@mui/material";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

export const TextCategory = styled.span`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    margin-left: 5px;
`;

export const BoxNavigation = styled(Box)`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const Text = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #737380;
    text-decoration: none;
    margin-right: 5px;
`;

export const Title = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    @media (max-width: 768px) {
        font-size: 28px;
    }
`;

export const  BoxSpaceBetween = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Summary = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

     @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const DropdownContainer = styled(Box)`
  position: relative;
`;

export const DropdownButton = styled(Box)`
    line-height: 22px;
    letter-spacing: 0%;
    text-align: center;
    vertical-align: middle;
    display: flex;
    align-items: center;
    color: #737380;
    cursor: pointer;

    .text {
        font-family: '${inter.style.fontFamily}', sans-serif;
        font-weight: 400;
        font-size: 14px;
        margin-right: 8px;
    }
`;

export const DropdownList = styled(Box)`
    position: absolute;
    top: calc(100% + 4px);
    left: -55px;
    width: 176px;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
    z-index: 100;

    .text {
        font-family: '${inter.style.fontFamily}', sans-serif;
        line-height: 22px;
        letter-spacing: 0%;
        font-weight: 400;
        font-size: 14px;
        vertical-align: middle;
    }
`;

export const DropdownItem = styled(Box)`
    padding: 12px 16px;
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-size: 16px;
    color: #5f6c72;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #f4f4f4;
    }
`;

export const OrganizeBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 40px;
`;

export const BoxPagination = styled(Box)`
    display: flex;
    justify-content: center;
    margin: 45px 0 70px;
`;

export const PaginationStyled = styled(Pagination)`
  & .MuiPagination-ul {
    gap: 8px;
  }

  & .MuiPaginationItem-root {
    padding: 8px;
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    color: #5f6c72;
    border-radius: 8px;
    border: 1px solid #e6e6e6;
    background-color: #e6e6e6;
    min-width: 30px;
    height: 30px;
    text-align: center;
    vertical-align: middle;
    text-transform: uppercase;
    transition: all 0.2s ease-in-out;

    &:hover {
    background-color: #f4f4f4;
    }
  }

  & .Mui-disabled {
    opacity: 1;
    color: #5f6c72;
    background-color: #e6e6e6;
    border: 1px solid #e6e6e6;
    pointer-events: none; 
  }

  & .Mui-selected {
    background-color: transparent;
    color: #A212DF;
    border: 1px solid #A212DF;
    font-weight: 600;
  }
`;