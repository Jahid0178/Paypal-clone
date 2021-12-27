import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./CheckCrypto.css";

const CheckCrypto = () => {
  return (
    <>
      <Container sx={{ py: 5 }}>
        <Grid container spacing={2}>
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
              <Typography variant="h3">Check out with crypto</Typography>
              <Typography sx={{ my: 2 }}>
                Access a new way to pay. Sign up for an account and spend crypto
                at millions of online stores with PayPal.
              </Typography>
              <Typography sx={{ mb: 2 }}>
                Checking out with crypto is a taxable transaction. Fees and
                exchange rates will apply. Buying and selling cryptocurrency is
                subject to a number of risks and PayPal does not make any
                recommendations. Consult your tax advisor. Merchants are paid in
                fiat currency.
              </Typography>
              <Link to="#">Sign Up</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://i.ibb.co/D8VSWSc/crypto-img.jpg"
              alt="checkout crypto"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CheckCrypto;
