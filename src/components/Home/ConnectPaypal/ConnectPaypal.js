import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "./ConnectPaypal.css";

const ConnectPaypal = () => {
  return (
    <Box sx={{ border: "1px solid #ddd" }}>
      <Container sx={{ py: 3 }}>
        <Typography variant="h6" sx={{ textAlign: "center", py: 3 }}>
          Need to connect PayPal with your online store?{" "}
          <a href="#">Sign up for a Business account</a>
        </Typography>
      </Container>
    </Box>
  );
};

export default ConnectPaypal;
