import { renderHook, act } from "@testing-library/react-hooks";
import useDarkMode from "./useDarkMode";

test("should start with false", () => {
  const { result } = renderHook(() => useDarkMode());

  expect(result.current.isDarkModeOn).toBe(false);
});

test("should toggle", () => {
  const { result } = renderHook(() => useDarkMode());

  act(() => {
    result.current.onToggleDarkMode();
  });

  expect(result.current.isDarkModeOn).toBe(true);

  act(() => {
    result.current.onToggleDarkMode();
  });

  expect(result.current.isDarkModeOn).toBe(false);
});
