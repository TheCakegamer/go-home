import React from 'react';
import {
  AppBar, Toolbar, Typography, Button,
} from '@material-ui/core';

const NavBar = ({ onClick }) => (
  <AppBar position="sticky">
    <Toolbar>
      <Typography variant="h6" style={{ flex: 1 }}>Go Home</Typography>
      <Button variant="contained" onClick={onClick}>Settings</Button>
    </Toolbar>
  </AppBar>
);

export default NavBar;
