import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography } from '@mui/material';
import { DeckRounded } from '@mui/icons-material';




const NavBar = () => {

  return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <DeckRounded />
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                All buttons here.
            </Typography>
        </Toolbar>
    </AppBar>
  );
}
export default NavBar;

