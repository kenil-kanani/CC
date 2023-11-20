import { React, useState } from 'react'
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DrawerComp from "./DrawerComp";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  const fontStyle = {
    fontSize: "15px",
  }

  return (
    <>
      <AppBar sx={{fontFamily:"Montserrat"}} position='static'>
        <Toolbar sx={{padding:"15px 0"}}>
          <Typography sx={{ fontSize: "2rem", fontWeight:500, marginLeft:{xs:"13px", sm:"0"} } }>Udyog Sarthi</Typography>
          {isMatch ? (
            <>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="secondary.main"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                <Tab label="Home" sx={fontStyle}/>
                <Tab label="Jobs" sx={fontStyle} />
                <Tab label="Programs" sx={fontStyle} />
                <Tab label="About Us" sx={fontStyle} />
                <Tab label="Contact" sx={fontStyle} />
              </Tabs>
              <Button sx={{ marginLeft: "auto", color:"white", fontSize:"16px" }} color='inherit' variant="outlined">
                Login
              </Button>
              <Button sx={{ marginLeft: "20px", borderColor:"white", fontSize:"16px" }} variant="contained">
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar
