import { useContext } from "react"

import { StateContext } from "App"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Link } from "react-router-dom"
import { Basket } from "utils/Basket"
import Divider from "@mui/material/Divider"
import { Container } from "@mui/material"
import ModifyBasketButton from "./ModifyBasketButton"
import { Item } from "types"



const ItemComponents = () => {

    const { basket, setBasket } = useContext(StateContext)


    let itemsToDisplay = null
    if (basket) {
        if (basket.items.length > 0) {
            itemsToDisplay = (
                <>
                    {basket.items.map((basketItem, index) => {
                    return (
                        <div key={index}>
                            <Box sx={{display: "flex", paddingTop: 2}}>
                                <Link to={`/products/${basketItem.item.id}`}>
                                    <Box sx={{flexGrow: 1, maxWidth: "140px", miHeight: "140px", padding: 1, paddingRight: 2}} >
                                        <img src={`${basketItem?.item.imageUrl}`} width="100%" height="100%"/>
                                    </Box>                              
                                </Link> 
                                <Box sx={{flexGrow: 1}}>
                                        <Box sx={{display: "flex", height: "25%"}}>
                                            <Typography variant="h6" sx={{flexGrow: 5, paddingBottom: 3}}>
                                                {basketItem?.item.name}
                                            </Typography>
                                            <Typography variant="body1" sx={{flexGrow: 1, paddingRight: 1, paddingTop: 1}}>
                                                {Basket.formatPrice(basketItem?.item.price as number, "de")}
                                            </Typography>
                                        </Box>
                                        <Box sx={{flexGrow: 4, height: "45%", paddingRight: 4}}>
                                            <Typography variant="body2" color="text.secondary">
                                                {basketItem?.item.description}
                                            </Typography>
                                        </Box>
                                        <Box sx={{flexGrow: 1, height: "30%"}}>
                                            <Box sx={{display: "flex"}}>
                                                <Box sx={{flexGrow: 5}}>
                                                <ModifyBasketButton item={basketItem?.item as Item} type="trash" />
                                                </Box>
                                                <Box sx={{display: "flex", alignItems: "center", flexGrow: 1, justifyContent: "flex-end", paddingRight: 10}}>
                                                    <ModifyBasketButton item={basketItem?.item as Item} type="minus" />
                                                    <Typography variant="body2">{basketItem?.quantity}</Typography>
                                                    <ModifyBasketButton item={basketItem?.item as Item} type="add" />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                                <Container sx={{paddingTop: 2}}>
                                    <Divider sx={{width: "90%"}}/>
                                </Container>
                        </div>
                    )
                })}
                </>
            )
        }
    }


    return (
        <>
            {itemsToDisplay}
        </>
        
    )

}

export default ItemComponents