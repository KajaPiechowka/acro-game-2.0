import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import "/App.sass";

test("renders learn react link", () => {
  render(<App />);
  const headingElement = screen.getByText(/welcome to acro game/i);
  expect(headingElement).toBeInTheDocument();
});
