// CustomerReviews.js
import React from "react";
import { Grid, Card, CardContent, Typography, Avatar } from "@mui/material";

function CustomerReviews() {
  return (
    <Grid container spacing={3}>
      {/* Review 1 */}
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            {/* slikica */}
            <Avatar
              src="/person1.jpg"
              alt="Person 1"
              sx={{ width: 80, height: 80, marginBottom: 2 }}
            />
            {/* Review Text */}
            <Typography variant="h5" component="h2">
              Review 1
            </Typography>
            <Typography variant="body2" component="p">
            Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.
            </Typography>
            {/* ime */}
            <Typography variant="subtitle2" sx={{ marginTop: 1 }}>
              John Doe
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Review 2 */}
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            {/* slikica */}
            <Avatar
              src="/person2.jpg"
              alt="Person 2"
              sx={{ width: 80, height: 80, marginBottom: 2 }}
            />
            {/* Review Text */}
            <Typography variant="h5" component="h2">
              Review 2
            </Typography>
            <Typography variant="body2" component="p">
            Great user experience on your website. I found exactly what I was looking for at a great price. I will definitely be telling my friends.
            </Typography>
            {/* ime */}
            <Typography variant="subtitle2" sx={{ marginTop: 1 }}>
              Samir Ustikolina
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Review 3 */}
      <Grid item xs={12} sm={4}>
        <Card>
          <CardContent>
            {/* slikica */}
            <Avatar
              src="/person3.jpg"
              alt="Person 3"
              sx={{ width: 80, height: 80, marginBottom: 2 }}
            />
            {/* Review Text */}
            <Typography variant="h5" component="h2">
              Review 3
            </Typography>
            <Typography variant="body2" component="p">
            Thank you for the excellent shopping experience. It arrived quickly and was exactly as described. I will definitely be shopping with you again in the future.
            </Typography>
            {/* ime */}
            <Typography variant="subtitle2" sx={{ marginTop: 1 }}>
              Michael Johnson
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default CustomerReviews;
