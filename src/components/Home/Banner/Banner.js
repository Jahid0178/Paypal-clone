import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import QRCode from "../../../assests/Images/Home/qr-code-us-home-hero.svg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-content">
      <Container>
        <Typography
          variant="h1"
          style={{ color: "#fff" }}
          sx={{ fontWeight: 500, pt: 3 }}
        >
          The New Paypal <br /> app is here
        </Typography>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <Typography variant="h6" sx={{ my: 4, color: "#fff" }}>
              Scan the code or enter your number to get the app.
            </Typography>
            <Grid container spacing={2}>
              <Grid item sm={12} md={4}>
                <img src={QRCode} alt="" />
              </Grid>
              <Grid item sm={12} md={8}>
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                />
                <Button
                  component="div"
                  sx={{ mt: 1, display: "block", width: 110 }}
                  variant="contained"
                >
                  Send Link
                </Button>
                <Typography sx={{ my: 2, fontWeight: "medium", color: "#fff" }}>
                  By clicking Send Link you agree to receive a text message with
                  a link to the PayPal app. Message and data rates may apply.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={12} md={6}>
            <img
              src="https://i.ibb.co/hmQ9Gt0/device-hero.png"
              alt="device-hero"
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Banner;
