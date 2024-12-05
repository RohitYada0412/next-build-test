"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <React.Fragment>
      <Box sx={{ backgroundColor: (thema) => thema.palette.primary.main }}>
        <Typography variant='subtitle1' className="fw-medium text-center">copy right &copy; {new Date().getFullYear()}</Typography>
      </Box>
    </React.Fragment>
  )
}

export default Footer