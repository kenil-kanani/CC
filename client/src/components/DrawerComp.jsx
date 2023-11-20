import React, { useState } from "react";
import {
  Box,
  Drawer,
  Button,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import InfoIcon from '@mui/icons-material/Info';
import PhoneIcon from '@mui/icons-material/Phone';

const pages = [
  { name: "Home", icon: <HomeIcon /> },
  { name: "Jobs", icon: <WorkIcon /> },
  { name: "Programs", icon: <AnalyticsIcon /> },
  { name: "About Us", icon: <InfoIcon /> },
  { name: "Contact Us", icon: <PhoneIcon /> }
];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{fontFamily:"Montserrat"}}
      >
        <Box sx={{ width: "100vw", height: "100vh" }}>
          <CloseIcon sx={{ position: "absolute", right: 20, top: 20, fontSize: "30px" }} onClick={() => setOpenDrawer(false)} />
          <List sx={{ marginTop: "70px", padding: "20px 10px" }} >
            {pages.map((page, index) => (
              <ListItemButton key={index} sx={{ borderBottom: "1px solid black" }} onClick={() => setOpenDrawer(!openDrawer)}>
                <ListItemIcon sx={{ marginRight: "-18px" }}>
                  {page.icon}
                </ListItemIcon>
                <ListItemText sx={{ color: "black" }}>{page.name}</ListItemText>
              </ListItemButton>
            ))}
          </List>
          <Box flexDirection="row" width="100%" padding="10px 80px" margin="10px 0">
            <Button sx={{ marginRight:"20px", fontSize:"18px", padding:"5px 25px", color: "primary", borderColor: "primary" }} variant="outlined">
              Login
            </Button>
            <Button sx={{ borderColor: "white", fontSize:"18px", padding:"5px 25px", color: "primary" }} variant="contained">
              SignUp
            </Button>
          </Box>
        </Box>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
};

export default DrawerComp;