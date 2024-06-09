import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#2C541D' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 2rem' }}>
        {/* Naziv prodavnice */}
        <Typography variant="h6" component="div" sx={{ color: 'white' }}>
          EARTH STORE
        </Typography>
        <div>
          {/* Linkovi za različite sekcije */}
          <Button 
            color="inherit" 
            component={Link} 
            to="/" 
            sx={{ color: 'white', mr: 3 }}
          >
            Home
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/about" 
            sx={{ color: 'white', mr: 3 }}
          >
            About
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/products" 
            sx={{ color: 'white', mr: 3 }}
          >
            Products
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/contact" 
            sx={{ color: 'white', mr: 3 }}
          >
            Contact
          </Button>
        </div>
        <div>
          {/* Ikone za pretragu i korpu */}
          <Button color="inherit" sx={{ color: 'white', mr: 2 }}>
            <SearchIcon />
          </Button>
          <Button color="inherit" sx={{ color: 'white' }}>
            <ShoppingCartIcon />
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
