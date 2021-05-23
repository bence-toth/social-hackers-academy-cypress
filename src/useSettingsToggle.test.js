import { renderHook, act } from "@testing-library/react-hooks";
import useSettingsToggle from "./useSettingsToggle";

test("should start with false", () => {
  const { result } = renderHook(() => useSettingsToggle());

  expect(result.current.isSettingsOpen).toBe(false);
});

test("should toggle", () => {
  const { result } = renderHook(() => useSettingsToggle());

  act(() => {
    result.current.onToggleSettings();
  });

  expect(result.current.isSettingsOpen).toBe(true);

  act(() => {
    result.current.onToggleSettings();
  });

  expect(result.current.isSettingsOpen).toBe(false);
});
