import { render, screen } from "@testing-library/react";
import App from "./App";

import userEvent from "@testing-library/user-event";

test("renders app's title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Users list/);
  expect(titleElement).toBeInTheDocument();
});

test("if search bar changes state when typing", () => {
  render(<App />);
  let searchBar = screen.getByPlaceholderText(/Search by user name.../);
  //console.log("the bar", searchBar);
  userEvent.type(searchBar, "Hello, World!");
  expect(screen.getByPlaceholderText(/Search by user name.../)).toHaveValue(
    "Hello, World!"
  );
});
