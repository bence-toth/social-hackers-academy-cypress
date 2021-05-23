import { render, screen } from "@testing-library/react";
import SettingsSidebar from "./SettingsSidebar";

test("calls onClick when clicked", () => {
  const onToggleDarkMode = jest.fn();
  render(<SettingsSidebar onToggleDarkMode={onToggleDarkMode} />);

  const darkModeToggleButton = screen.getByRole("button", {
    name: /dark mode/i,
  });
  darkModeToggleButton.click();

  expect(onToggleDarkMode).toBeCalled();
});
