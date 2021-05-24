const getMood = (mood) => {
  // eslint-disable-next-line default-case
  switch (mood) {
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
  }
};

const locale = {
  checkInHeading: () => "Check in with yourself",
  checkInSubheading: () => "How are you feeling right now?",
  hideCheckIns: () => "Hide previous check-ins",
  showCheckIns: () => "Show previous check-ins",
  noCheckInsYet: () => "You have no check-ins yet.",
  averageMood: (mood) =>
    `Your average mood during the past week was ${getMood(mood)}.`,
  mood: getMood,
  settings: () => "Settings",
  darkMode: () => "Dark mode",
  formattedDate: (time) => new Date(time).toLocaleDateString("en-gb"),
};

export default locale;
