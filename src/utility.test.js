import {
  getAverageMoodDuringPastWeek,
  hasCheckInsInThePastWeek,
} from "./utility";

test("hasCheckInsInThePastWeek returns true if there are check-ins in the past week", () => {
  const now = Date.now();
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  const checkIns = [
    { time: now - oneWeek - 10000, mood: 1 },
    { time: now - oneWeek + 10000, mood: 3 },
    { time: now - oneWeek + 20000, mood: 5 },
  ];

  const result = hasCheckInsInThePastWeek({ checkIns, now });

  expect(result).toBe(true);
});

test("hasCheckInsInThePastWeek returns false if there are no check-ins in the past week", () => {
  const now = Date.now();
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  const checkIns = [
    { time: now - oneWeek - 30000, mood: 1 },
    { time: now - oneWeek - 20000, mood: 3 },
    { time: now - oneWeek - 10000, mood: 5 },
  ];

  const result = hasCheckInsInThePastWeek({ checkIns, now });

  expect(result).toBe(false);
});

test("hasCheckInsInThePastWeek returns false if there are no check-ins at all", () => {
  const now = Date.now();
  const checkIns = [];

  const result = hasCheckInsInThePastWeek({ checkIns, now });

  expect(result).toBe(false);
});

test("getAverageMoodDuringPastWeek calculates correct average for one check-in", () => {
  const now = Date.now();
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  const checkIns = [{ time: now - oneWeek + 10000, mood: 3 }];

  const result = getAverageMoodDuringPastWeek({ checkIns, now });

  expect(result).toBe(3);
});

test("getAverageMoodDuringPastWeek calculates correct average for multiple check-ins", () => {
  const now = Date.now();
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  const checkIns = [
    // Average is 3
    { time: now - oneWeek + 10000, mood: 1 },
    { time: now - oneWeek + 20000, mood: 3 },
    { time: now - oneWeek + 30000, mood: 5 },
  ];

  const result = getAverageMoodDuringPastWeek({ checkIns, now });

  expect(result).toBe(3);
});

test("getAverageMoodDuringPastWeek ignores check-ins which are older than a week", () => {
  const now = Date.now();
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  const checkIns = [
    // Average is 4
    { time: now - oneWeek - 20000, mood: 1 }, // Should be ignored
    { time: now - oneWeek - 10000, mood: 2 }, // Should be ignored
    { time: now - oneWeek + 10000, mood: 3 },
    { time: now - oneWeek + 20000, mood: 4 },
    { time: now - oneWeek + 30000, mood: 5 },
  ];

  const result = getAverageMoodDuringPastWeek({ checkIns, now });

  expect(result).toBe(4);
});

test("getAverageMoodDuringPastWeek rounds average correctly (1/2)", () => {
  const now = Date.now();
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  const checkIns = [
    // Average is 3.3333
    { time: now - oneWeek - 30000, mood: 5 }, // Should be ignored
    { time: now - oneWeek - 20000, mood: 5 }, // Should be ignored
    { time: now - oneWeek - 10000, mood: 5 }, // Should be ignored
    { time: now - oneWeek + 10000, mood: 1 },
    { time: now - oneWeek + 20000, mood: 4 },
    { time: now - oneWeek + 30000, mood: 5 },
  ];

  const result = getAverageMoodDuringPastWeek({ checkIns, now });

  expect(result).toBe(3);
});

test("getAverageMoodDuringPastWeek rounds average correctly (2/2)", () => {
  const now = Date.now();
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  const checkIns = [
    // Average is 4.5
    { time: now - oneWeek - 30000, mood: 1 }, // Should be ignored
    { time: now - oneWeek - 20000, mood: 1 }, // Should be ignored
    { time: now - oneWeek - 10000, mood: 1 }, // Should be ignored
    { time: now - oneWeek + 10000, mood: 4 },
    { time: now - oneWeek + 20000, mood: 5 },
  ];

  const result = getAverageMoodDuringPastWeek({ checkIns, now });

  expect(result).toBe(5);
});
