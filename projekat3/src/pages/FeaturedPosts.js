// FeaturedPosts.js
import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";

function FeaturedPosts() {
  return (
    <Grid container spacing={3}>
      {/* Post 1 */}
      <Grid item xs={12} sm={4}>
        <Card>
          <CardMedia
            component="img"
            height="250"
            image="/Poster4.jpg"
            alt="Poster 1"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              Poster V1
            </Typography>
            <Typography variant="body2" component="p">
              17.99$
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Post 2 */}
      <Grid item xs={12} sm={4}>
        <Card>
          <CardMedia
            component="img"
            height="250"
            image="/Poster5.jpg"
            alt="Poster 2"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
                Poster V2
            </Typography>
            <Typography variant="body2" component="p">
                $23.99$
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Post 3 */}
      <Grid item xs={12} sm={4}>
        <Card>
          <CardMedia
            component="img"
            height="250"
            image="/Poster6.jpg"
            alt="Poster 3"
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              Poster V3
            </Typography>
            <Typography variant="body2" component="p">
              14.99$
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default FeaturedPosts;
