import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./TouchFreePayment.css";

const TouchFreePayment = () => {
  return (
    <>
      <Container sx={{ py: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src="https://i.ibb.co/86bBpF2/touchfree-img.jpg"
              alt="touch-free"
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
              <Typography variant="h3">Touch-free payments</Typography>
              <Typography sx={{ fontWeight: "medium", my: 3 }}>
                Leave the cash and cards at home. When it comes to paying with
                the app, the only thing you’ll need to reach for is your phone.
              </Typography>
              <Link to="#">Learn more about PayPal QR codes</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TouchFreePayment;
