import React from "react";
import { render, screen } from "@testing-library/react";
import Navbar from "./";

describe("Navbar component testing", () => {
  test("renders Hello Sarath", () => {
    render(<Navbar name="Sarath" />);
    const linkElement = screen.getByText(/Hello Sarath/i);
    expect(linkElement).toBeInTheDocument();
  });
});
