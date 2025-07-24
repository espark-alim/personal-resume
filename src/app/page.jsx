import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Navbar />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          minHeight: { xs: "200px", sm: "240px" },
        }}
      >
        <Stack spacing={1.5} px={1.5} pb={1.5}>
          <Typography
            variant="h5"
            fontWeight={500}
            maxWidth={"400px"}
            color="#374151"
          >
            Front end Developer
          </Typography>
          <Typography variant="h1" fontFamily={"Caveat"}>
            Web Apps{" "}
            <Typography
              variant="h1"
              component={"span"}
              fontFamily={"Caveat"}
              sx={{
                display: "inline-block",
                position: "relative",
                fontWeight: 700,
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: "-1px", // start before "Web Apps"
                  bottom: -8, // distance from the text baseline
                  width: "calc(100% + 5px)", // extend beyond both sides
                  height: "7px", // thickness of the marker
                  backgroundColor: "#ff6b00", // marker color
                  zIndex: -1,
                  borderRadius: "50px",
                  transform: "rotate(-3deg)", // rotate the line slightly
                  transformOrigin: "left center", // rotate around left side
                },
              }}
            >
              Expert
            </Typography>
          </Typography>
          <Typography
            variant="h6"
            fontWeight={600}
            maxWidth={"400px"}
            color="#7d838e"
          >
            Creating modern, high‑impact web solutions
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          height: "100vh",
          backgroundColor: "#f3f4f6",
        }}
      >
      </Box>
    </Box>
  );
};

export default page;
