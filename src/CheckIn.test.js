import { render, screen } from "@testing-library/react";
import CheckIn from "./CheckIn";

test("calls onAddCheckIn with correct value for awful", () => {
  const onAddCheckIn = jest.fn();
  render(<CheckIn onAddCheckIn={onAddCheckIn} />);

  const awfulButton = screen.getByRole("button", { name: /awful/i });
  awfulButton.click();

  expect(onAddCheckIn).toBeCalledWith(1);
});

test("calls onAddCheckIn with correct value for bad", () => {
  const onAddCheckIn = jest.fn();
  render(<CheckIn onAddCheckIn={onAddCheckIn} />);

  const badButton = screen.getByRole("button", { name: /bad/i });
  badButton.click();

  expect(onAddCheckIn).toBeCalledWith(2);
});

test("calls onAddCheckIn with correct value for okay", () => {
  const onAddCheckIn = jest.fn();
  render(<CheckIn onAddCheckIn={onAddCheckIn} />);

  const okayButton = screen.getByRole("button", { name: /okay/i });
  okayButton.click();

  expect(onAddCheckIn).toBeCalledWith(3);
});

test("calls onAddCheckIn with correct value for good", () => {
  const onAddCheckIn = jest.fn();
  render(<CheckIn onAddCheckIn={onAddCheckIn} />);

  const goodButton = screen.getByRole("button", { name: /good/i });
  goodButton.click();

  expect(onAddCheckIn).toBeCalledWith(4);
});

test("calls onAddCheckIn with correct value for awesome", () => {
  const onAddCheckIn = jest.fn();
  render(<CheckIn onAddCheckIn={onAddCheckIn} />);

  const awesomeButton = screen.getByRole("button", { name: /awesome/i });
  awesomeButton.click();

  expect(onAddCheckIn).toBeCalledWith(5);
});

test("calls onToggleCheckIns when show button is clicked", () => {
  const onToggleCheckIns = jest.fn();
  render(
    <CheckIn onToggleCheckIns={onToggleCheckIns} areCheckInsVisible={false} />
  );

  const toggleCheckInsButton = screen.getByRole("button", {
    name: /show previous check-ins/i,
  });
  toggleCheckInsButton.click();

  expect(onToggleCheckIns).toBeCalled();
});

test("calls onToggleCheckIns when hide button is clicked", () => {
  const onToggleCheckIns = jest.fn();
  render(<CheckIn onToggleCheckIns={onToggleCheckIns} areCheckInsVisible />);

  const toggleCheckInsButton = screen.getByRole("button", {
    name: /hide previous check-ins/i,
  });
  toggleCheckInsButton.click();

  expect(onToggleCheckIns).toBeCalled();
});
