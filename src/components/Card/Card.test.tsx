import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./";

describe("Card component testing", () => {
  test("error scenario", () => {
    const cardProps = {
      title: "Posts",
      children: null,
      onPageNumberClick: jest.fn,
      pageCount: 0,
      errorMessage: "Unable to fetch details",
    };
    render(<Card {...cardProps} />);
    const headingElement = screen.getByText(/Posts/i);
    expect(headingElement).toBeInTheDocument();
    const errorElement = screen.getByText(/Unable to fetch details/i);
    expect(errorElement).toBeInTheDocument();
  });

  test("data population scenario", () => {
    const handleClick = jest.fn();
    const cardProps = {
      title: "Posts",
      children: <span>Populate data in datatable</span>,
      onPageNumberClick: handleClick,
      pageCount: 1,
      errorMessage: "",
    };
    render(<Card {...cardProps} />);
    const dataElement = screen.getByText(/Populate data in datatable/i);
    expect(dataElement).toBeInTheDocument();
    fireEvent.click(screen.getByText(/1/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
