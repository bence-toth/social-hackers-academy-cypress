import { renderHook, act } from "@testing-library/react-hooks";
import useCheckInsToggle from "./useCheckInsToggle";

test("should start with false", () => {
  const { result } = renderHook(() => useCheckInsToggle());

  expect(result.current.areCheckInsVisible).toBe(false);
});

test("should toggle", () => {
  const { result } = renderHook(() => useCheckInsToggle());

  act(() => {
    result.current.onToggleCheckIns();
  });

  expect(result.current.areCheckInsVisible).toBe(true);

  act(() => {
    result.current.onToggleCheckIns();
  });

  expect(result.current.areCheckInsVisible).toBe(false);
});
