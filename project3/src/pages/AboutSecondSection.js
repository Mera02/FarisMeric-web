import React from "react";
import { Grid, Typography } from "@mui/material";

function AboutSecondSection() {
  return (
    <Grid container spacing={3}>
      {/* lijeva kolona slika */}
      <Grid item xs={12} sm={6} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img
          src="aboutusslika.jpg" 
          alt="About Image"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Grid>
      {/* desna kolona tekst */}
      <Grid item xs={12} sm={6} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
          OUR MISSION
        </Typography>
         {/* Tekst */}
        <Typography variant="body1">
          Hello, my name is Tyler Moore and with the help of many people I made
          this template. I made it so it is super easy to update and so that it
          flows perfectly with my tutorials. Lots of love and hundreds of hours
          went into making it. I hope you love it as much as I do.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default AboutSecondSection;
