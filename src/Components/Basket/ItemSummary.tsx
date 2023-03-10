import { useContext } from "react"

import { StateContext } from "App"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Divider from "@mui/material/Divider"
import { Basket } from "utils/Basket"


const ItemSummary = () => {

    const { basket } = useContext(StateContext)
    const shippingCosts = 5.99


    return (
        <>
            <Typography variant="h5" sx={{paddingBottom: 3}}>
                Summary
            </Typography>
            <Box sx={{display:"flex"}}>
                <Typography sx={{flexGrow: 4}}  color="text.secondary">Subtotal</Typography>
                <Box sx={{display: "grid", justifyContent: "flex-end"}}>
                    <Typography sx={{flexGrow: 1}}>{Basket.formatPrice(basket?.getTotalPrice() as number, "de")}</Typography>
                </Box>
            </Box>
            <Box sx={{display:"flex", paddingBottom: 2}}>
                <Typography sx={{flexGrow: 4}} color="text.secondary">Estimated Shipping Costs</Typography>
                <Box sx={{display: "grid", justifyContent: "flex-end"}}>
                    <Typography sx={{flexGrow: 1}}>{Basket.formatPrice(shippingCosts, "de")}</Typography>
                </Box>
            </Box>
            <Divider />
            <Box sx={{display:"flex", paddingTop: 1, paddingBottom: 1}}>
                <Typography sx={{flexGrow: 4}} color="text.secondary">Total</Typography>
                <Box sx={{display: "grid", justifyContent: "flex-end"}}>
                    <Typography sx={{flexGrow: 1}}>{Basket.formatPrice(basket?.getTotalPrice() as number + shippingCosts, "de")}</Typography>
                </Box>
            </Box>
            <Divider />
        </>
    )
}

export default ItemSummary