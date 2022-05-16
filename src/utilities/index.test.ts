import {
  fillRowData,
  camel2title,
  capitalizeFirstLetter,
  storeUserName,
  getUserName,
} from "./";

describe("Utilities testing", () => {
  test("camel2Title scenarios", () => {
    expect(camel2title("camelCase")).toEqual("Camel Case");
  });
  test("capitalizeFirstLetter scenarios", () => {
    expect(capitalizeFirstLetter("posts")).toEqual("Posts");
  });
  test("storeUserName scenarios", () => {
    storeUserName("Sarath");
    expect(getUserName()).toEqual("Sarath");
  });
  describe("fillRowData scenarios", () => {
    test("empty data", () => {
      const { rowsById, rowsOrder, columnNames } = fillRowData([]);
      expect(rowsById).toEqual({});
      expect(rowsOrder).toEqual([]);
      expect(columnNames).toEqual([]);
    });
    test("Valid data", () => {
      const entry = {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "Description",
      };
      const { rowsById, rowsOrder, columnNames } = fillRowData([entry]);
      expect(rowsById).toEqual({ "1": entry });
      expect(rowsOrder).toEqual(["1"]);
      expect(columnNames).toEqual(["postId", "id", "name", "email", "body"]);
    });
  });
});
