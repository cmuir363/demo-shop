import { useContext } from 'react';
import { Link } from 'react-router-dom';

import Badge from '@mui/material/Badge';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import IconButton from '@mui/material/IconButton';

import { StateContext } from 'App';

const BasketMenu = () => {

    const { basket } = useContext(StateContext)

    return (
        <IconButton>
            <Link to="/cart" style={{ color: 'white' }}>
                <Badge badgeContent={basket?.getTotalItems()}>
                    <ShoppingBasketIcon />
                </Badge>
            </Link>
        </IconButton>
        
    )


}

export default BasketMenu