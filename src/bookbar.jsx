import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import "./fontnav.css"
import SearchAppBar from './appbar';
export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{backgroundColor: "white", boxShadow: "none"}} position="fixed">
          
          <Typography className='Nav' variant="h3" color="#7A8FFE" component="div">
            BooKShop
          </Typography>
          <SearchAppBar></SearchAppBar>
      </AppBar>
    </Box>
    
  );
}


