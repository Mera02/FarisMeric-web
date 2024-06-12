import React from "react";
import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", py: 3, mt:10 }}>
      {/* ime prodavnice */}
      <Typography variant="h6" align="center">
        Earth Store
      </Typography>
      {/* copyright informacija */}
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} Earth Store. Sva prava zadržana.
      </Typography>
      {/* Linkovi */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        {/* Link za "About" */}
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          About
        </Link>
        {/* Link za "Terms of Service" */}
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Terms of Service
        </Link>
        {/* Link za "Privacy Policy" */}
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
        {/* Link za "Contact" */}
        <Link href="#" color="inherit" sx={{ mx: 1 }}>
          Contact
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;
