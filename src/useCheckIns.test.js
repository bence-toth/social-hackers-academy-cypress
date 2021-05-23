import { renderHook, act } from "@testing-library/react-hooks";
import useCheckIns from "./useCheckIns";

test("should start with empty list", () => {
  const { result } = renderHook(() => useCheckIns());

  expect(result.current.checkIns).toHaveLength(0);
});

test("should add checkIns to list", () => {
  const { result } = renderHook(() => useCheckIns());

  act(() => {
    result.current.onAddCheckIn(1);
  });

  act(() => {
    result.current.onAddCheckIn(3);
  });

  act(() => {
    result.current.onAddCheckIn(5);
  });

  expect(result.current.checkIns).toHaveLength(3);
  expect(result.current.checkIns[0].mood).toBe(1);
  expect(result.current.checkIns[1].mood).toBe(3);
  expect(result.current.checkIns[2].mood).toBe(5);
});
