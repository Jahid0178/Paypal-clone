import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./SendMoney.css";

const SendMoney = () => {
  return (
    <div>
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
              <Typography variant="h3">
                Express yourself when you send money
              </Typography>
              <Typography sx={{ my: 3 }}>
                Explore creative ways to split the bill or send money with a
                friendly message, colorful theme, GIFs, and more.1
              </Typography>
              <Link to="#">Send money now</Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="https://i.ibb.co/xSGtnZD/sendmoney-img.jpg"
              alt="send-money"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default SendMoney;
