"use client";
import React from "react";
import theme from "@/app/theme";
import { ThemeProvider } from "@mui/material/styles";

const MuiThemeProvider = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
};

export default MuiThemeProvider;
