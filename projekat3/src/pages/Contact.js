import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import ContactForm from "../components/ContactForm";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Contact() {
  return (
    <>
    {/* Sekcija za kontakt sa pozadinom */}
      <Box
        sx={{
          backgroundImage: `url('./pozadina.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white',
          mb : 10
        }}
      >
        {/* Naslov */}
        <Typography 
          variant="h2" 
          sx={{ 
            marginBottom: '1rem',
            color: '#2C541D', 
            fontWeight: 'bold', 
            fontSize: '3rem' 
          }}
        >
          CONTACT US
        </Typography>

          {/* Podnaslov */}

        <Typography 
          variant="h4" 
          sx={{ 
            marginBottom: '1.5rem',
            color: 'black', 
            fontSize: '2rem' 
          }}
        >
          We'd love to hear from you
        </Typography>
      </Box>
      {/* Forma za kontakt i kontakt informacije */}
      <Container>
        <Grid container spacing={3}>
          {/* Forma za kontakt */}
          <Grid item xs={12} sm={6}>
            <ContactForm />
          </Grid>
          {/* Kontakt informacije */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ mt: 3 }}>
              {/* Naslov sekcije */}
              <Typography variant="h3">Talk to us</Typography>
              <Grid container spacing={2}>
                {/* Email */}
                <Grid item xs={12}>
                  <EmailIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                  <Typography variant="h5" color="textSecondary" gutterBottom>
                    Email
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    something@tyler.com
                  </Typography>
                </Grid>
                {/* Phone */}
                <Grid item xs={12}>
                  <PhoneIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                  <Typography variant="h5" color="textSecondary" gutterBottom>
                    Phone
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    202-555-0188
                  </Typography>
                </Grid>
                {/* Adresa */}
                <Grid item xs={12}>
                  <LocationOnIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                  <Typography variant="h5" color="textSecondary" gutterBottom>
                    Address
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    2727 Ocean Road,
                    Malibu, CA, 90264
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Contact;
