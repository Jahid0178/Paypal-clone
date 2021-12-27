import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./BuyNowPayLater.css";

const BuyNowPayLater = () => {
  return (
    <div>
      <Container sx={{ py: 5 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
              src="https://i.ibb.co/Vjf1kKP/BNPL-img.jpg"
              alt="Buy Now Pay Later"
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
              <Typography variant="h3">
                Buy now, pay later with Pay in 4
              </Typography>
              <Typography sx={{ my: 3 }}>
                Want something now but the sale ends before payday? Choose Pay
                in 4 at checkout with millions of online stores and split the
                cost into 4 interest-free payments.
              </Typography>
              <Link to="#">Lear how to pay in 4</Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default BuyNowPayLater;
