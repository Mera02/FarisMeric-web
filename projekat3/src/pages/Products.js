import React, { useState } from "react";
import { Typography, Box, Grid, Card, CardMedia, CardContent, Button, Container } from "@mui/material";

function Products() {
  //produkti
  const [products] = useState([
    { id: 1, name: "Twilight Citadel", description: "Step into the ethereal beauty of the Twilight Citadel.", price: 19.99, image: "product1.jpg" },
    { id: 2, name: "Ocean's Embrace", description: "Dive into the tranquil depths of Ocean's Embrace.", price: 29.99, image: "product2.jpg" },
    { id: 3, name: "Eternal Serenity", description: "Find peace and serenity in the timeless beauty of Eternal Serenity.", price: 24.99, image: "product3.jpg" },
    { id: 4, name: "Whispers of the Wind", description: "Listen to the whispers of the wind as it dances through the fields of Whispers of the Wind.", price: 34.99, image: "product4.jpg" },
    { id: 5, name: "Serenade of the Stars", description: "Be enchanted by the Serenade of the Stars.", price: 39.99, image: "product5.jpg" },
    { id: 6, name: "Celestial Dreams", description: "Let your imagination soar among the stars with Celestial Dreams.", price: 27.99, image: "product6.jpg" },
    { id: 7, name: "Enchanted Valley", description: "Embark on an adventure through the Enchanted Valley.", price: 21.99, image: "product7.jpg" },
    { id: 8, name: "Aurora Borealis", description: "Witness the breathtaking beauty of the Aurora Borealis.", price: 31.99, image: "product8.jpg" },
    { id: 9, name: "Dragon's Lair", description: "Enter the realm of the Dragon's Lair, where ancient mysteries and untold treasures await.", price: 36.99, image: "product9.jpg" },
    { id: 10, name: "Crystal Caverns", description: "Discover the shimmering beauty of the Crystal Caverns. ", price: 22.99, image: "product10.jpg" },
  ]);

  return (
    <Container>
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4">Shop</Typography>
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${product.price}
                    </Typography>
                    <Button variant="contained" color="primary">
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Products;
