import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"  style={{ background: '#212121' }}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
           <Typography variant="h6" color="inherit" component="div" flexGrow={1} textAlign="left">
           My Website
         </Typography>
         <Box display={"flex"}>
          
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HOME
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ABOUT
          </Button>
          <Button variant="h6" component="div" sx={{ flexGrow: 1 }}>
            CONTACT
          </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
