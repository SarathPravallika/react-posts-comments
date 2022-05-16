import React, { FC, memo } from "react";
import AppBar from "@mui/material/AppBar";

interface NavbarProps {
  name: string;
}

const Navbar: FC<NavbarProps> = ({ name }) => {
  return (
    <AppBar
      aria-label="To show the greeting message for user"
      position="static"
      className="center"
      sx={{
        height: 50,
      }}
    >
      Hello {name}
    </AppBar>
  );
};

export default memo(Navbar);
