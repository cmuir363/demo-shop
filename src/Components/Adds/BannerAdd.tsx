import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"

const BannerAdd = () => {

    return (
        <Box sx={{display: "flex", width: 1, paddingTop: "10px", paddingBottom: "10px"}}>
            <Paper elevation={3} sx={{display: "flex", width: 1}}>
                <img src="./banner.jpg" width="100%" />
            </Paper>
        </Box>
    )

}

export default BannerAdd