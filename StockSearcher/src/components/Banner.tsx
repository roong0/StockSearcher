import { Box, Typography } from "@mui/material";
import Carousel from "./Carousel";
// Use boxes rather than containers, was having problems with not taking up full size of div


function Banner() {

    return (
        <div>
            <Box
                sx={{
                    backgroundImage: "url(./banner2.jpg)",
                    width: "100%",
                }}
            >
            <Typography
                variant="h2"
                style={{
                  fontWeight: "bold",
                  color: "white",
                  marginBottom: 15,
                  fontFamily: "Montserrat",
                }} 
                sx={{
                    display: "flex",
                    height: "40%",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center", 
                }}
            >Stock Searcher</Typography>
            <Typography
                sx={{
                    display: "flex",
                    height: "40%",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center", 
                }}
                style={{
                    color: "darkgrey",
                    textTransform: "capitalize",
                    fontFamily: "Montserrat",
                }}
            >Get the latest info regarding your ASX stocks</Typography>
            <Carousel />
        </Box>
        </div>       
        
    );
  }

  export default Banner

  /*

  */