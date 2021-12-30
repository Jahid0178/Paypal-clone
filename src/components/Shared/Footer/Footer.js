import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <ul className="footer-ul">
              <li className="footer-li">
                <Link to="#" className="footer-link">
                  Help
                </Link>
              </li>
              <li className="footer-li">
                <Link to="#" className="footer-link">
                  Contact
                </Link>
              </li>
              <li className="footer-li">
                <Link to="#" className="footer-link">
                  Fees
                </Link>
              </li>
              <li className="footer-li">
                <Link to="#" className="footer-link">
                  Security
                </Link>
              </li>
              <li className="footer-li">
                <Link to="#" className="footer-link">
                  Apps
                </Link>
              </li>
              <li className="footer-li">
                <Link to="#" className="footer-link">
                  Shop
                </Link>
              </li>
              <li className="footer-li">
                <Link to="#" className="footer-link">
                  Enterprise
                </Link>
              </li>
              <li className="footer-li">
                <Link to="#" className="footer-link">
                  Partners
                </Link>
              </li>
              <li className="footer-li">
                <Link to="#" className="footer-link">
                  Feedback
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography>Global Flag In Here</Typography>
          </Grid>
        </Grid>
        <hr />
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <ul className="footer-ul">
              <li className="footer-li">
                <Link to="#" className="footer-bottom-link">
                  About
                </Link>
              </li>
              <li className="footer-li">
                <Link to="#" className="footer-bottom-link">
                  Newsroom
                </Link>
              </li>
              <li className="footer-li">
                <Link to="#" className="footer-bottom-link">
                  Jobs
                </Link>
              </li>
              <li className="footer-li">
                <Link to="#" className="footer-bottom-link">
                  Investor Relations
                </Link>
              </li>
              <li className="footer-li">
                <Link to="#" className="footer-bottom-link">
                  Value in Action
                </Link>
              </li>
              <li className="footer-li">
                <Link to="#" className="footer-bottom-link">
                  Public Policy
                </Link>
              </li>
              <li className="footer-li">
                <Link to="#" className="footer-bottom-link">
                  Sitemap
                </Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={5}>
            <ul className="footer-bottom-ul">
              <Typography>&copy; 1999-2021</Typography>
              <li className="footer-bottom-li">
                <Link className="footer-bottom-link" to="#">
                  Accessibility
                </Link>
              </li>
              <li className="footer-bottom-li">
                <Link className="footer-bottom-link" to="#">
                  Privacy
                </Link>
              </li>
              <li className="footer-bottom-li">
                <Link className="footer-bottom-link" to="#">
                  Cookies
                </Link>
              </li>
              <li className="footer-bottom-li">
                <Link className="footer-bottom-link" to="#">
                  Legal
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Footer;
