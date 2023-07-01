import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";


export default function Navbar({}) {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "2em" }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%" onClick={() => navigate("/")}>
            <text>POQUEMON</text>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
