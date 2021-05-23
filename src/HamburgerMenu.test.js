import { render, screen } from "@testing-library/react";
import HamburgerMenu from "./HamburgerMenu";

test("calls onClick when clicked", () => {
  const onClick = jest.fn();
  render(<HamburgerMenu onClick={onClick} />);

  const hamburgerMenuButton = screen.getByRole("button");
  hamburgerMenuButton.click();

  expect(onClick).toBeCalled();
});
