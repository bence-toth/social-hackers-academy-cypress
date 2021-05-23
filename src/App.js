import useSettingsToggle from "./useSettingsToggle";
import useDarkMode from "./useDarkMode";
import useCheckInsToggle from "./useCheckInsToggle";
import useCheckIns from "./useCheckIns";
import { getCheckInValueText, getAverageMoodDuringPastWeek } from "./utility";

import "./App.css";

const App = () => {
  const { checkIns, onAddCheckIn } = useCheckIns();
  const { areCheckInsVisible, onToggleCheckIns } = useCheckInsToggle();
  const { isSettingsOpen, onToggleSettings } = useSettingsToggle();
  const { isDarkModeOn, onToggleDarkMode } = useDarkMode();

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
          <button className="checkInButton" onClick={() => onAddCheckIn(1)}>
            <div className="emoji">😢</div>
            <div>{getCheckInValueText(1)}</div>
          </button>
          <button className="checkInButton" onClick={() => onAddCheckIn(2)}>
            <div className="emoji">🙁</div>
            <div>{getCheckInValueText(2)}</div>
          </button>
          <button className="checkInButton" onClick={() => onAddCheckIn(3)}>
            <div className="emoji">😐</div>
            <div>{getCheckInValueText(3)}</div>
          </button>
          <button className="checkInButton" onClick={() => onAddCheckIn(4)}>
            <div className="emoji">😊</div>
            <div>{getCheckInValueText(4)}</div>
          </button>
          <button className="checkInButton" onClick={() => onAddCheckIn(5)}>
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
