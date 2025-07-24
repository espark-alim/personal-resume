import React from "react";
import { AppBar, Toolbar, Button, Typography, Stack, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        mx: "auto",
        width: "100%",
        backgroundColor: "transparent",
        px: 2,
        // boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          width: "100%",
          justifyContent: "center",
          flexWrap: "wrap",
          maxWidth: "900px",
          mx: "auto",
          position: "relative",
        }}
      >
        {/* Logo */}
        <Box sx={{ position: "absolute", left: 0 }}>
          <Typography
            variant="h4"
            fontWeight={"bold"}
            color="#000"
            fontFamily={"Caveat"}
            sx={{
              "&::after": {
                content: '""',
                position: "absolute",
                right: 0, // start before "Web Apps"
                bottom: -4, // distance from the text baseline
                width: "100%", // extend beyond both sides
                height: "3px", // thickness of the marker
                backgroundColor: "#ff6b00", // marker color
                zIndex: -1,
                borderRadius: "50px",
                transform: "rotate(-2deg)", // rotate the line slightly
                transformOrigin: "left center", // rotate around left side
              },
            }}
          >
            Muhammad Ali
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            gap: 4,
          }}
        >
          {["Webs", "Projects", "Contact", "Pricing", "Help"]?.map(
            (item, index) => (
              <Typography
                key={index}
                variant="h6"
                sx={{
                  position: "relative",
                  cursor: "pointer",
                  color: "#2c2c2c",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    bottom: -2, // text ke niche
                    width: 0, // initially hidden
                    height: "3px",
                    backgroundColor: "#ff6b00",
                    transition: "width 0.3s ease", // smooth animation
                    borderRadius: "50px",
                    transform: "rotate(-2deg)",
                  },
                  "&:hover": {
                    "&::after": {
                      width: "100%", // hover par underline show kare
                    },
                  },
                }}
              >
                {item}
              </Typography>
            )
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
