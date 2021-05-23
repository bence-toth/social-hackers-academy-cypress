const getCheckInsInThePastWeek = ({ checkIns, now }) => {
  const aWeekAgo = now - 7 * 24 * 60 * 60 * 1000;
  const checkInsDuringPastWeek = checkIns
    .filter(({ time }) => time >= aWeekAgo)
    .map(({ mood }) => mood);
  return checkInsDuringPastWeek;
};

const hasCheckInsInThePastWeek = ({ checkIns, now }) =>
  getCheckInsInThePastWeek({ checkIns, now }).length > 0;

const getAverageMoodDuringPastWeek = ({ checkIns, now }) => {
  const checkInsDuringPastWeek = getCheckInsInThePastWeek({
    checkIns,
    now,
  });
  const averageCheckInDuringPastWeek =
    checkInsDuringPastWeek.reduce(
      (accumulator, current) => accumulator + current,
      0
    ) / checkInsDuringPastWeek.length;
  return Math.round(averageCheckInDuringPastWeek);
};

export { getAverageMoodDuringPastWeek, hasCheckInsInThePastWeek };
