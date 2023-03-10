import Box from "@mui/material/Box"

import ItemSummary from "./ItemSummary"
import ItemComponents from "./ItemComponents"
import { Container, Typography } from "@mui/material"

const Basket = () => {

    return (
        <Container sx={{maxWidth: "700px", paddingTop: 5}}>

            <Box sx={{display: "flex", padding: 2}} >
                <Box sx={{flexGrow: 3}}>
                    <ItemComponents />
                </Box>
                <Box sx={{flexGrow: 1}}>
                    <ItemSummary />
                </Box>
            </Box>
        </Container>
    )

}

export default Basket