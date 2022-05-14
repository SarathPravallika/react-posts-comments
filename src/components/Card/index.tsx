import React, { useEffect } from "react";
import MUICard from "@mui/material/Card";

function Card() {
  useEffect(() => {
    console.log("Card");
  }, []);
  return (
    <MUICard sx={{ margin: 5, padding: 5, minWidth: 500, minHeight: 500 }}>
      Card component
    </MUICard>
  );
}

export default Card;
