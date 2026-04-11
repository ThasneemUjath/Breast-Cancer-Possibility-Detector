// src/components/Header.js
import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static" sx={{ background: "linear-gradient(135deg,#001f7a,#00f0ff)" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          Mammo Assist - Breast Cancer Predictor
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
