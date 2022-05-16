import React from "react";
import { render, screen } from "@testing-library/react";
import DataTable from "./";

describe("DataTable component testing", () => {
  test("data population scenario", () => {
    const dataTableProps = {
      rowsById: { "1": { id: 1, name: "Sarath", userId: 1 } },
      rowsOrder: ["1"],
      columnNames: ["id", "name", "userId"],
    };
    render(<DataTable {...dataTableProps} />);
    const headingElement = screen.getByText(/User Id/i);
    expect(headingElement).toBeInTheDocument();
    const dataElement = screen.getByText(/Sarath/i);
    expect(dataElement).toBeInTheDocument();
  });
});
