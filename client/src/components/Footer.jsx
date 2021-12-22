import React from "react";
import { Box, Container, Typography } from "@mui/material";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Box
      sx={{
        bgcolor: "rgb(23, 23, 23)",
        height: "auto",
        width: "100%",
        marginBottom: 0,
        color: "white",
        marginTop: "15px",
      }}
    >
      <Box
        sx={{
          bgcolor: "rgb(33, 31, 37)",
          height: "auto",
          //   minHeight: "70px",
          width: "100%",
          margin: 0,
        }}
      >
        <Container fixed>
          <Typography
            sx={{
              padding: "30px 0px",
              textAlign: "center",
            }}
          >
            Made with 🤍
            <p></p>
            <p>ADITI ROUT • DEEPAK YADAV • KARISH CHAUDHARY • KHUSHI SAHOO • MUSKAN SAHOO</p>
            <p>PIYUSH MISHRA • PRANAV PATEL • RAJ ARYAN • SAURAV PATI • SUBHRAJYOTI</p>
          </Typography>
        </Container>
      </Box>
      <Typography style={{ textAlign: "center" }} variant="body2">
        <span style={{ color: "rgb(170, 170, 170)" }}>©{year} Copyright</span>
      </Typography>
    </Box>
  );
}
