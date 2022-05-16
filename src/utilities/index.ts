import { v4 as uuidv4 } from "uuid";
import {
  RowsById,
  RowData,
  RowsOrder,
  ColumnNames,
} from "./../redux/hofs/table/table.props";
import { ID_FIELD } from "../constants";

const fillRowData = (rowData: RowData = []) => {
  const rowsById: RowsById = {};
  const rowsOrder: RowsOrder = [];
  let columnNames: ColumnNames = [];

  rowData.forEach((row, index) => {
    const id: string = row[ID_FIELD].toString() || uuidv4();
    rowsById[id] = row;
    rowsOrder.push(id);
    if (index === 0) {
      // Populate column names while looping through the first row
      columnNames = Object.keys(row);
    }
  });

  return {
    rowsById,
    rowsOrder,
    columnNames,
  };
};

const camel2title = (camelCase: string) =>
  camelCase
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim();

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const storeUserName = (userName: string) =>
  sessionStorage.setItem("userName", userName);

const getUserName = () => sessionStorage.getItem("userName");

export {
  fillRowData,
  camel2title,
  capitalizeFirstLetter,
  storeUserName,
  getUserName,
};
