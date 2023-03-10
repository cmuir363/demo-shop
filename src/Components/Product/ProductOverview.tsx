import { useContext } from "react"
import { useParams } from "react-router-dom"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Basket } from "utils/Basket"
import ModifyBasketButton from "Components/Basket/ModifyBasketButton"

import { StateContext } from "App"
import { Item } from "types"


const ProductOverview = () => {

    const { products } = useContext(StateContext)

    const { id } = useParams()

    const item = products?.findItemById(parseInt(id as string))
    

    return (
        <>
            <Box sx={{height: "100%"}}>
                <Typography variant="h4">
                    {item?.name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    {item?.description}
                </Typography>
                <Typography variant="subtitle1">
                    {Basket.formatPrice(item?.price as number, "de")}
                </Typography>
                <Box sx={{display: "flex", paddingTop: 4}}>
                    <ModifyBasketButton item={item as Item} type="addButton"/>
                </Box>
            </Box>
        </>
    )
}

export default ProductOverview