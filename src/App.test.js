import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders entire app", () => {
  render(<App />);

  const checkInForm = screen.getByText(/check in with yourself/i);
  const checkInList = screen.getByText(/you have no check-ins yet/i);
  const settings = screen.getByText(/settings/i);

  expect(checkInForm).toBeInTheDocument();
  expect(checkInList).toBeInTheDocument();
  expect(settings).toBeInTheDocument();
});
