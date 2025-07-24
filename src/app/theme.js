// theme.js
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#272d4b",
    },
    secondary: {
      main: "#ff6b00",
    },
    paragraphColor: { main: "#7b7d87" },
  },
  typography: {
    fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif, 'Caveat'",
    //  fontFamily: "'Caveat', 'Helvetica', 'Arial', sans-serif",
    h1: {
      fontSize: "72px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "48px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "35px",
      fontWeight: 700,
    },
    h4: {
      fontSize: "28px",
      fontWeight: 600,
    },
    h5: {
      fontSize: "18px",
      fontWeight: 600,
    },
    h6: {
      fontSize: "14px",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
