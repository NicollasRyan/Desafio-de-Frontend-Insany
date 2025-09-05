"use client";

import { Box, CircularProgress } from "@mui/material"

export const Loading = () => {
    return (
        <Box sx={{ height: '400px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: "center" }}>
            <CircularProgress />
        </Box>
    )
}