import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();

    const darkTheme = createTheme({
      palette: {
        mode: 'dark',
      },
    });

    return (
      <div>
        <ThemeProvider theme={darkTheme}>
          <AppBar position="static" color="transparent" sx={{backgroundColor: "#14161a"}}>
            <Container>
              <Toolbar>
                <Typography
                    onClick={() => navigate(`/`)}
                    variant="h5"
                    sx={{flex:1,
                    color:"gold",
                    fontFamily:"Montserrat",
                    fontWeight:"bold",
                    cursor:"pointer"}}>
                    Stock Searcher
                  </Typography>
                <Select 
                  variant="outlined"
                  sx={{width:100, height:40, marginLeft:15,}}
                  defaultValue={"AUD"}
                  >
                  <MenuItem value={"AUD"}>$AUD</MenuItem>
                  <MenuItem value={"USD"}>$USD</MenuItem>
                </Select>
              </Toolbar>
            </Container>
          </AppBar>
        </ThemeProvider>

        
      </div>
    );
  }