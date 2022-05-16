import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { camel2title } from "../../utilities";
import { ColumnNames, RowsOrder } from "../../redux/hofs/table/table.props";
import "./DataTable.css";

interface DataTableProps {
  rowsById: any;
  rowsOrder: RowsOrder;
  columnNames: ColumnNames;
}

const DataTable: FC<DataTableProps> = ({
  rowsById,
  rowsOrder,
  columnNames,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="table to show the data">
        <TableHead>
          <TableRow>
            {columnNames.map((columnName: string) => (
              <TableCell key={columnName}>
                {camel2title(columnName)}&nbsp;
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsOrder.map((rowId: string) => (
            <TableRow
              key={rowId}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columnNames.map((columnName: string) => (
                <TableCell key={`${rowId}${columnName}`}>
                  {rowsById[rowId][columnName]}&nbsp;
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
