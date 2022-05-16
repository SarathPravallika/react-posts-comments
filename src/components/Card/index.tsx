import React, { FC, ReactNode } from "react";
import MUICard from "@mui/material/Card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { capitalizeFirstLetter } from "../../utilities";

interface CardProps {
  title: string;
  children: ReactNode;
  onPageNumberClick: (pageNumber: number) => void;
  pageCount: number;
  errorMessage: string;
}

const Card: FC<CardProps> = ({
  title,
  children,
  onPageNumberClick,
  pageCount,
  errorMessage,
}) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    event.stopPropagation();
    onPageNumberClick(value);
  };

  return (
    <MUICard
      sx={{ margin: 5, padding: 1, height: "100%" }}
      aria-label="card to hold the container"
    >
      <h4
        style={{
          textAlign: "center",
          color: "#1976d2",
        }}
      >
        {capitalizeFirstLetter(title)}
      </h4>
      {errorMessage ? <p>{errorMessage}</p> : children}
      <Stack
        spacing={2}
        sx={{
          paddingTop: 1.5,
          paddingBottom: 0.5,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Pagination count={pageCount} color="primary" onChange={handleChange} />
      </Stack>
    </MUICard>
  );
};

export default Card;
