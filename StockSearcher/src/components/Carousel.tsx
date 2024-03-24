
import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";
//import image from "./image.png";
import { Box } from "@mui/material";
// import { TrendingCoins } from "../Api.js";
//import { CryptoState } from "../../CryptoContext";
//import { numberWithCommas } from "../CoinsTable";

const Carousel = () => {
  const [trending, setTrending] = useState([]);
  //const { currency, symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get("https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo");
    setTrending(data.top_gainers.concat(data.top_losers));
  };

  
  useEffect(() => {
    fetchTrendingCoins();
    console.log("useEffect called");
  }, []); // Empty array here to stop it from constantly calling.
  // TODO: fix below by making a type
  const items = trending.map((stock:any) => {
        return (
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
                textTransform: "uppercase",
                color: "white",
              }}>
                <Link to={`/stock/${stock.ticker}`} >
                    <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        cursor: "pointer",
                        textTransform: "uppercase",
                        color: "white",
                        fontSize:20,
                        fontWeight:500,
                        fontFamily:"Montserrat",
                      }}>
                        <span>{stock.ticker}</span>
                        <span
                        style={{color: (stock.change_percentage > 0 ? "red":"rgb(14, 203, 129)"),}}
                        >{stock.change_percentage}</span>
                        <span>${stock.price}</span>
                    </Box>
                </Link>
            </Box>
            
        );
    });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 6,
    },
  };

  return (
    <div >
        <AliceCarousel
            mouseTracking
            infinite
            autoPlayInterval={1000}
            animationDuration={1500}
            disableDotsControls
            disableButtonsControls
            responsive={responsive}
            items={items}
            autoPlay
        />      
    </div>
  );
};

export default Carousel;

/* Data:
{
    "metadata": "Top gainers, losers, and most actively traded US tickers",
    "last_updated": "2024-03-22 16:15:59 US/Eastern",
    "top_gainers": [
        {
            "ticker": "NLSPW",
            "price": "0.038",
            "change_amount": "0.0268",
            "change_percentage": "239.2857%",
            "volume": "16143"
        },
        {
            "ticker": "MSSAW",
            "price": "0.0089",
            "change_amount": "0.0049",
            "change_percentage": "122.5%",
            "volume": "3900"
        },
        {
            "ticker": "MRNO",
            "price": "21.25",
            "change_amount": "11.58",
            "change_percentage": "119.7518%",
            "volume": "3140191"
        },

*/