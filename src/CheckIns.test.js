import { render, screen } from "@testing-library/react";
import CheckIns from "./CheckIns";

test("shows no check-ins message if there are no check-ins", () => {
  render(<CheckIns checkIns={[]} />);

  const noCheckInsMessage = screen.getByText(/you have no check-ins yet/i);

  expect(noCheckInsMessage).toBeInTheDocument();
});

test("renders average check-ins", () => {
  render(
    <CheckIns
      checkIns={[
        { time: Date.now() - 10000, mood: 5 },
        { time: Date.now() - 20000, mood: 3 },
      ]}
    />
  );

  const averageMood = screen.getByText(
    /your average mood during the past week was good/i
  );

  expect(averageMood).toBeInTheDocument();
});

test("does not render average check-ins when they are all older than one week", () => {
  const eightDays = 8 * 24 * 60 * 60 * 1000;
  render(
    <CheckIns
      checkIns={[
        { time: Date.now() - eightDays - 10000, mood: 5 },
        { time: Date.now() - eightDays, mood: 3 },
      ]}
    />
  );

  const averageMood = screen.queryByText(
    /your average mood during the past week was/i
  );

  expect(averageMood).not.toBeInTheDocument();
});

test("renders each check-in", () => {
  const oneWeek = 8 * 24 * 60 * 60 * 1000;
  render(
    <CheckIns
      checkIns={[
        { time: Date.now() - oneWeek - 3, mood: 1 },
        { time: Date.now() - oneWeek - 2, mood: 2 },
        { time: Date.now() - oneWeek - 1, mood: 3 },
        { time: Date.now() - oneWeek + 1, mood: 4 },
        { time: Date.now() - oneWeek + 2, mood: 5 },
        { time: Date.now() - oneWeek + 3, mood: 4 },
      ]}
    />
  );

  const moods = screen.getAllByRole("listitem");

  expect(moods).toHaveLength(6);
});
