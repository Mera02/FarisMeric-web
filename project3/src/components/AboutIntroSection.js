import React from "react";
import { Box, Typography } from "@mui/material";

function AboutIntroSection() {
  return (
    //background slika
    <Box 
      sx={{ 
        backgroundImage: `url('./pozadina.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
      }}

      //naslov
    >
      <Typography 
        variant="h2" 
        sx={{ 
          marginBottom: '1rem', //velicina i boje
          fontSize: '4rem', 
          fontWeight: 'bold', 
          color: '#2C541D' 
        }}
      >
        WHO ARE WE?
      </Typography>
    </Box>
  );
}

export default AboutIntroSection;
