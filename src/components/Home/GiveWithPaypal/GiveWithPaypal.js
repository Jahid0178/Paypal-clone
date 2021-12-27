import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./GiveWithPaypal.css";

const GiveWithPaypal = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src="https://i.ibb.co/RyFQy3P/give-img.jpg"
              alt="give with paypal"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography variant="h3">Give with PayPal</Typography>
              <Typography sx={{ my: 3, fontWeight: "medium" }}>
                Make a difference by supporting causes and fundraisers close to
                home and heart.
              </Typography>
              <Link to="#">Give through the app</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default GiveWithPaypal;
