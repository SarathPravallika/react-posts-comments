import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { render, screen } from "@testing-library/react";
import PostsComments from "./";

describe("PostsComments component testing", () => {
  test("data population scenario", () => {
    const initialData = {
      rowsById: {},
      rowsOrder: [],
      columnNames: [],
      totalPages: 0,
      errorMessage: "",
    };
    const mockStore = configureStore();
    render(
      <Provider
        store={mockStore({ posts: initialData, comments: initialData })}
      >
        <PostsComments />
      </Provider>
    );
    const headingElement = screen.getByText(
      /Showing all posts and comments from/i
    );
    expect(headingElement).toBeInTheDocument();
  });
});
