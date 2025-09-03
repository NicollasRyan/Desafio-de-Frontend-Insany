import styled from "@emotion/styled";
import { Box, Grid, Pagination, Typography } from "@mui/material";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '700'] });

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
        font-style: Regular;
        font-size: 14px;
        margin-right: 8px;
    }
`;

export const DropdownList = styled(Box)`
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
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
        font-style: Regular;
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

export const Title = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 700;
    font-style: Bold;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;

    margin: 50px 0 50px;
`;

export const CardCategores = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 208px;
    height: 116px;
    opacity: 1;
    border-radius: 12px;
    border-width: 1px;
    padding-top: 32px;
    padding-right: 40px;
    padding-bottom: 32px;
    padding-left: 40px;
    gap: 16px;
    border: 1px solid #E6E6E6;
    background-color: #FFF;

    .title {
        font-family: '${inter.style.fontFamily}', sans-serif;
        font-weight: 700;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;
    }

    .text {
        font-family: '${inter.style.fontFamily}', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        letter-spacing: 0%;
        vertical-align: middle;
    }
`;

export const PaginationStyled = styled(Pagination)`
    margin: 45px 0 70px;

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

export const TitleCategores = styled(Typography)`
    font-family: '${inter.style.fontFamily}', sans-serif;
    font-weight: 700;
    font-style: Bold;
    font-size: 40px;
    line-height: 150%;
    letter-spacing: 0%;
    vertical-align: middle;
    margin: 25px 0 50px;
`;

export const GridCategores = styled(Grid)`
    margin-bottom: 100px;
`;