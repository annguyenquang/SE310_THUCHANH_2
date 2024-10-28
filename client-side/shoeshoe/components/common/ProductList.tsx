
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid2, LinearProgress, Typography, IconButton, Tooltip } from '@mui/material';
import { useProductStore } from '../../core/store/ProductStore';
import React from 'react';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import red from '@mui/material/colors/red';
type ProductListProps = {
    isAdmin?: boolean,
}
export const ProductList: React.FC<ProductListProps> = ({ isAdmin = false }) => {
    const store = useProductStore();
    const [loading, setLoading] = React.useState<boolean>(false);
    React.useEffect(() => {
        setLoading(true);
        const promise: Promise<void> = store.loadProduct();
        Promise.allSettled([promise]).then(() => {
            setLoading(false);
        });

    }, []);
    return (
        <div>
            {loading && <Box display={"flex"}><LinearProgress sx={{ width: '100%' }}></LinearProgress></Box>}
            <Grid2 container spacing={3} >
                {
                    store.products.map((item, idx) => (
                        <Grid2 size={4} key={idx}>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    sx={{ height: 140 }}
                                    image={item.pictureUrl}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                        Brand: {item.brand}
                                    </Typography>
                                    <Chip color='primary' label={`$ ${item.price}.00`}></Chip>
                                </CardContent>
                                <CardActions>
                                    <Box width={'100%'} justifyContent={"space-between"} display={'flex'}>
                                        <div>
                                            <Button size="small">Learn More</Button>
                                        </div>
                                        <div>
                                            <Tooltip title="Edit product">
                                                <IconButton>
                                                    <EditOutlined color='primary'> </EditOutlined>
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="Delete product">
                                                <IconButton aria-label="" >
                                                    <DeleteOutline sx={{ color: red[500] }}></DeleteOutline>
                                                </IconButton>
                                            </Tooltip>
                                        </div>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid2>
                    ))
                }
            </Grid2>
        </div>
    )
}