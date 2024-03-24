import { AppBar, Box, Container, MenuItem, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Table() {
    const darkTheme = createTheme({
      palette: {
        mode: 'dark',
      },
    });

    const [stocks, setStocks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);

    // API Limits 25/day
  const fetchStocks = async (text:string) => {
    setLoading(true);
    const { data } = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${text}&apikey=FARMVCTNVSOEOK3H`);
    console.log(data);
    setStocks(data.bestMatches);
    //setLoading(false);
  };

  const onSearch = (text:string) => {
    fetchStocks(text);
    //console.log(stocks);
  }

    return (
        <ThemeProvider theme={darkTheme}>
            <Typography>Search</Typography>
            <TextField
              label="Search For a Stock..."
              style={{ marginBottom: 20, width: "100%", color:"black" }}
              onChange={(e) => onSearch(e.target.value)}
            />
          <Typography>Stocks:</Typography>

          
        </ThemeProvider>
    );
  }

  /*
  <TableContainer>
                <TableHead style={{ backgroundColor: "#EEBC1D" }} >
                  <TableRow>
                    <TableCell>Code</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>24h Change</TableCell>
                    <TableCell>Market Cap</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {stocks?.map((row) => (
                    <TableCell key={row[0]}>
                      <TableCell component="th" scope="row">
                        {row[1]}
                      </TableCell>
                      
                    </TableCell>
                  ))}
                </TableBody>
          </TableContainer>
  */