import { useContext } from 'react';
import Button from "@mui/material/Button"
import IconButton from '@mui/material/IconButton';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { StateContext } from 'App';
import { Item } from 'types';
import { saveBasket } from 'utils/Basket';

interface ModifyBasketButtonProps {
    item: Item
    type: "button" | "add" | "trash" | "minus" | "addButton" | "minusButton"
}

const ModifyBasketButton = (props: ModifyBasketButtonProps) => {
    const { item, type } = props
    const { basket, setBasket } = useContext(StateContext)

    const handleOnAddToBasket = () => {
        if (basket) {
            basket?.addItemToBasket(item, 1)
            setBasket({...basket})
            saveBasket(basket)
        }
    }

    const handleOnRemoveFromBasket = () => {
        if (basket) {
            basket.removeItemFromBasket(item)
            setBasket({...basket})
            saveBasket(basket)
        }
    }

    const handleRemoveAllOfItem = () => {
        if (basket) {
            basket.removeEntireItemFromBasket(item)
            setBasket({...basket})
            saveBasket(basket)
        }
    }

    let basketAppearance = null
    if (type === "addButton") {
        basketAppearance = (
            <Button onClick={handleOnAddToBasket} variant="outlined" >
                Add To Basket
            </Button>
        )
    } 

    if (type === "minusButton") {
        basketAppearance = (
            <Button onClick={handleOnRemoveFromBasket}>
                Remove From Basket
            </Button>
        )
    } 
    
    if (type === "add") {
        basketAppearance = (
            <IconButton onClick={handleOnAddToBasket}>
                <AddIcon />
            </IconButton>
        )
    }

    if (type === "minus") {
        basketAppearance = (
            <IconButton onClick={handleOnRemoveFromBasket}>
                <RemoveIcon />
            </IconButton>
        )
    } 

    // type is trash then remove all of this item type
    if (type === "trash") {
        basketAppearance = (
            <IconButton onClick={handleRemoveAllOfItem}>
                <DeleteOutlineIcon />
            </IconButton>
        )
    }
        

    return (
        <>
            {basketAppearance}
        </>
    )

}

export default ModifyBasketButton