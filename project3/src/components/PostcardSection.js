// PostcardSection.js
import React from "react";
import { Grid, Typography, Button } from "@mui/material";

function PostcardSection() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <img
          src="postcard-image.jpg" // Replace with the URL of your image
          alt="Postcard"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={12} md={6} style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <Typography variant="h4" gutterBottom>
          Give the Gift of a Postcard
        </Typography>
        <Typography variant="body1" paragraph>
          Want to send a memorable greeting to your loved ones? Our postcards
          are perfect for any occasion. Choose from a variety of designs and
          personalize your message.
        </Typography>
        <Button variant="contained" color="primary">
          Send a Postcard
        </Button>
      </Grid>
    </Grid>
  );
}

export default PostcardSection;
