import { useContext } from "react"

import Grid from '@mui/material/Unstable_Grid2';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ProductOverview from "./ProductOverview";
import { useParams } from "react-router-dom"

import { StateContext } from "App"

const ProductPageLayout = () => {

    const { products } = useContext(StateContext)
    const { id } = useParams()
    const item = products?.findItemById(parseInt(id as string))

    return (
        <>  
        <Container maxWidth="md" sx={{paddingTop: 10}}>
            <Grid container spacing={2}>
                <Grid xs={12} sm={7}>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <Box sx={{maxWidth: "500px"}}>
                            <img src={`${item?.imageUrl}`} width="100%"/>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} sm={5}>
                    <ProductOverview />
                </Grid>
            </Grid>
        </Container>
        </>
    )

}

export default ProductPageLayout