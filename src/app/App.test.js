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

  const searchBar = screen.getByPlaceholderText(/Search by user name.../);

  userEvent.type(searchBar, "Hello, World");

  const expectedValue = "Hello, World";

  expect(screen.getByPlaceholderText(/Search by user name.../)).toHaveValue(
    expectedValue
  );
});
