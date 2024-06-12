import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <Box 
      sx={{ 
        backgroundImage: `url('./pozadina.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Typography 
        variant="h2" 
        sx={{ 
          marginBottom: '1rem', 
          fontWeight: 'bold', 
          color: '#2C541D' 
        }}
      >
        EARTH
      </Typography>
      <Typography 
        variant="h4" 
        sx={{ 
          marginBottom: '1.5rem', 
          color: 'black' 
        }}
      >
        MULTIPURPOSE STORE
      </Typography>
      <Button 
        variant="contained" 
        color="primary"
        component={Link} 
        to="/products"
      >
        shop now
      </Button>
    </Box>
  );
}

export default HeroSection;
