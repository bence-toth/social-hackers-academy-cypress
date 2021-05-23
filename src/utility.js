const getCheckInValueText = (value) => {
  switch (value) {
    case 1:
      return "awful";
    case 2:
      return "bad";
    case 3:
      return "okay";
    case 4:
      return "good";
    case 5:
      return "awesome";
    default:
      return "";
  }
};

const getAverageMoodDuringPastWeek = ({ checkIns, averageAfter }) => {
  const aWeekAgo = averageAfter - 7 * 24 * 60 * 60 * 1000;
  const checkInsDuringPastWeek = checkIns
    .filter(({ time }) => time >= aWeekAgo)
    .map(({ value }) => value);
  const averageCheckInDuringPastWeek =
    checkInsDuringPastWeek.reduce(
      (accumulator, current) => accumulator + current,
      0
    ) / checkInsDuringPastWeek.length;
  return Math.round(averageCheckInDuringPastWeek);
};

export { getCheckInValueText, getAverageMoodDuringPastWeek };
