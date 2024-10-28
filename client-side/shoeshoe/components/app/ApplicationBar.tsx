"use client"
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Box, Button, Typography } from '@mui/material';

export const ApplicationBar = () => {
    const pages = ['products', 'admin']
    return (
        <AppBar position="static" color="warning">
            <Toolbar>
                <Typography variant="h6" color="white">ShoeShoe</Typography>
                <Box sx={{ marginLeft: 5, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            sx={{ my: 2, color: 'white', display: 'block', textTransform: 'none' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar >
    )
}