// AboutUs.js
import React, { useState, useEffect } from "react";
import { Typography, Box, Button, Container } from "@mui/material";
import AboutIntroSection from "../components/AboutIntroSection";
import AboutSecondSection from "./AboutSecondSection";

function AboutUs() {
  // Stanje za informacije
  const [info, setInfo] = useState("Fetching data...");
  // Stanje za prikazivanje sadržaja
  const [showContent, setShowContent] = useState(false);

  // Efekat koji se izvršava nakon renderovanja komponente
  useEffect(() => {
    // Simulacija dohvatanja podataka
    setTimeout(() => {
      setInfo("Fetched about info");
      setShowContent(true); // Prikazivanje sadržaja nakon dohvatanja podataka
    }, 2000);
  }, []);

  return (
    <div>
      <AboutIntroSection />
      <Container>
        <Box sx={{ mt: 10 }}>
          <Typography variant="h4">About Page</Typography>
          {/* Prikazivanje teksta "Fetching data..." dok se podaci ne dohvate */}
          {!showContent && <Typography variant="body1">Fetching data...</Typography>}
          {/* Prikazivanje dohvaćenih informacija kada su dostupne */}
          {showContent && (
            <Typography variant="body1">{info}</Typography>
          )}
        </Box>
        {showContent && <AboutSecondSection />} {/* Renderovanje komponente AboutSecondSection ako je showContent true */}
      </Container>
      {showContent && (
        <Box
          sx={{
            backgroundImage: `url('./pozadina.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            textAlign: 'center',
            padding: '2rem 0',
            mt : 10
          }}
        >
          <Typography variant="h4">GIVE THE GIFT OF A POSTCARD</Typography>
          <Typography variant="body1" sx={{ marginBottom: '1rem' }}>
            Give the gift of a lasting memory with a postcard
          </Typography>
          <Button variant="contained" color="primary">
            PURCHASE A POSTCARD
          </Button>
        </Box>
      )}
    </div>
  );
}

export default AboutUs;
