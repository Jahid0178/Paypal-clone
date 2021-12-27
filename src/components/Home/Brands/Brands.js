import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./Brands.css";

const Brands = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Typography variant="h2" sx={{ fontWeight: "medium" }}>
              Check out with millions of brands you love
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography>All brands in here</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Brands;
