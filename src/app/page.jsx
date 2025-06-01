import React from "react";
import { Box, Typography } from "@mui/material";

const page = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" component="h1">
        Personal Resume
      </Typography>
    </Box>
  );
};

export default page;
