import {
  fetchError,
  populateRows,
  resetRows,
} from "../../features/comments/comments.slice";
import generateTableSlice from "./table.slice";

describe("Table slice test scenarios", () => {
  const commentsSlice = generateTableSlice("comments").reducer;
  const initialData = {
    rowsById: {},
    rowsOrder: [],
    columnNames: [],
    totalPages: 0,
    errorMessage: "",
  };

  test("resetRows should reset the data", () => {
    const returnState = commentsSlice(
      { ...initialData, totalPages: 1 },
      {
        type: resetRows.type,
      }
    );

    expect(returnState).toEqual(initialData);
  });

  test("fetchError should populate error", () => {
    const returnState = commentsSlice(initialData, {
      type: fetchError.type,
      payload: "Internal server error",
    });

    expect(returnState.errorMessage).toEqual("Internal server error");
  });

  test("populateRows should populate rows and details accordingly", () => {
    const returnState = commentsSlice(
      { ...initialData, errorMessage: "Internal server error" },
      {
        type: populateRows.type,
        payload: { data: [{ id: 1, name: "John" }], total: 1 },
      }
    );

    expect(returnState.rowsById).toEqual({ "1": { id: 1, name: "John" } });
    expect(returnState.rowsOrder).toEqual(["1"]);
    expect(returnState.columnNames).toEqual(["id", "name"]);
    expect(returnState.totalPages).toEqual(1);
    expect(returnState.errorMessage).toEqual("");
  });
});
