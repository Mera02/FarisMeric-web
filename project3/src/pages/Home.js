import React, { useState } from "react";
import { Button, Box, Typography, Container } from "@mui/material";
import HeroSection from "./HeroSection"; 
import FeaturedPosts from "./FeaturedPosts"; 
import CustomerReviews from "./CustomerReviews"; 

function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Box sx={{ mb: 10 }}> {/* margina */}
        <HeroSection />
      </Box>
      <Container>
        <Box sx={{ mt: 10, mb: 10 }}>
          <Typography variant="h4">Featured Posts</Typography>
          <FeaturedPosts />
        </Box>
      </Container>
      <Container>
        <Box sx={{ mt: 15, mb: 15 }}>
          <Typography variant="h4">What Our Customers Say</Typography>
          <CustomerReviews />
        </Box>
      </Container>
    </div>
  );
}

export default Home;
