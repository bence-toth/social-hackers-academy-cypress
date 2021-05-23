import { useState } from "react";
import "./App.css";

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
  console.log(checkInsDuringPastWeek);
  const averageCheckInDuringPastWeek =
    checkInsDuringPastWeek.reduce(
      (accumulator, current) => accumulator + current,
      0
    ) / checkInsDuringPastWeek.length;
  return Math.round(averageCheckInDuringPastWeek);
};

const App = () => {
  const [areCheckInsVisible, setAreCheckInsVisible] = useState(false);
  const onToggleCheckIns = () => {
    setAreCheckInsVisible(!areCheckInsVisible);
  };

  const [checkIns, setCheckIns] = useState([]);
  const addCheckIn = (value) => {
    setCheckIns([
      ...checkIns,
      {
        time: Date.now(),
        value,
      },
    ]);
  };

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const onToggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const onToggleDarkMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
  };

  return (
    <div
      className="app"
      data-check-ins-open={areCheckInsVisible}
      data-dark-mode={isDarkModeOn}
    >
      <div className="checkIn">
        <h1>Check in with yourself</h1>
        <p className="howAreYouFeeling">How are you feeling right now?</p>
        <div>
          <button className="checkInButton" onClick={() => addCheckIn(1)}>
            <div className="emoji">😢</div>
            <div>{getCheckInValueText(1)}</div>
          </button>
          <button className="checkInButton" onClick={() => addCheckIn(2)}>
            <div className="emoji">🙁</div>
            <div>{getCheckInValueText(2)}</div>
          </button>
          <button className="checkInButton" onClick={() => addCheckIn(3)}>
            <div className="emoji">😐</div>
            <div>{getCheckInValueText(3)}</div>
          </button>
          <button className="checkInButton" onClick={() => addCheckIn(4)}>
            <div className="emoji">😊</div>
            <div>{getCheckInValueText(4)}</div>
          </button>
          <button className="checkInButton" onClick={() => addCheckIn(5)}>
            <div className="emoji">🤩</div>
            <div>{getCheckInValueText(5)}</div>
          </button>
        </div>
        <button className="toggleCheckIns" onClick={onToggleCheckIns}>
          {areCheckInsVisible
            ? "Hide previous check-ins"
            : "Show previous check-ins"}
        </button>
      </div>
      <div className="checkIns">
        {checkIns.length === 0 && <p>You have no check-ins yet.</p>}
        {checkIns.length > 0 && (
          <>
            <p className="averageMoodIndicator">
              Your average mood during the past week was{" "}
              {getCheckInValueText(
                getAverageMoodDuringPastWeek({
                  checkIns,
                  averageAfter: Date.now(),
                })
              )}
              .
            </p>
            <ul className="checkInsList">
              {checkIns.map(({ time, value }) => (
                <div key={time} className="checkInItem">
                  <span className="date">
                    {new Date(time).toLocaleDateString("en-gb")}
                  </span>
                  <span className="mood">{getCheckInValueText(value)}</span>
                </div>
              ))}
            </ul>
          </>
        )}
      </div>
      <button
        className="hamburgerMenu"
        data-settings-open={isSettingsOpen}
        onClick={onToggleSettings}
      >
        <div></div>
        <div></div>
        <div></div>
      </button>
      <div className="settingsOverlay" data-visible={isSettingsOpen}></div>
      <div className="settings" data-open={isSettingsOpen}>
        <h2>Settings</h2>
        <button
          className="toggleButton"
          data-on={isDarkModeOn}
          onClick={onToggleDarkMode}
        >
          <div className="toggle">
            <div />
          </div>
          <div className="label">Dark mode</div>
        </button>
      </div>
    </div>
  );
};

export default App;
