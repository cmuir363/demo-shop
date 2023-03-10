import React, { useContext } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import { StateContext } from "App";
import { Item } from "types";
import { Basket } from "utils/Basket";
import ModifyBasketButton from "Components/Basket/ModifyBasketButton";

interface ProductCardProps{
    item: Item
    quantity: number
}

const ProductCard = (props: ProductCardProps) => {
    const { item, quantity } = props
    const { basket, setBasket } = useContext(StateContext)

    return (
        <Card sx={{ maxWidth: 345, minWidth: 300, width: 345 }}>
            <Link to={`/products/${item.id}`} style={{textDecoration: 'none', color: '#FFF'}}>
                <CardMedia
                    sx={{ height: 400 }}
                    image={item.imageUrl}
                    title={item.name}
                />
            </Link>
            <CardContent>
                <Box sx={{ flexDirection: 'row', display: "flex" }}>
                    <Typography gutterBottom variant="h5" component="div" sx={{ flexGrow: 1}}>
                        {item.name}
                    </Typography>
                    <Typography variant="h6" >{Basket.formatPrice(item.price, "de")}</Typography>
                </Box>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions sx={{display: "flex", justifyContent: "flex-end"}}>
                <Box sx={{flexGrow: 4}}>
                    Sizes
                </Box>
                <Box sx={{flexGrow: 1}}>
                    <Box sx={{display: "flex", justifyContent: "flex-end"}}>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <ModifyBasketButton item={item} type="minus" />
                                <Typography variant="body2">{quantity}</Typography>
                            <ModifyBasketButton item={item} type="add" />
                        </Box>
                    </Box>
                </Box>
            </CardActions>
        </Card>
    )
}

export default ProductCard