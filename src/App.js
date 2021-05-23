import useSettingsToggle from "./useSettingsToggle";
import useDarkMode from "./useDarkMode";
import useCheckInsToggle from "./useCheckInsToggle";
import useCheckIns from "./useCheckIns";
import { getAverageMoodDuringPastWeek } from "./utility";
import CheckIn from "./CheckIn";
import locale from "./locale";

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
      <CheckIn
        onAddCheckIn={onAddCheckIn}
        areCheckInsVisible={areCheckInsVisible}
        onToggleCheckIns={onToggleCheckIns}
      />
      <div className="checkIns">
        {checkIns.length === 0 && <p>{locale.noCheckInsYet()}</p>}
        {checkIns.length > 0 && (
          <>
            <p className="averageMoodIndicator">
              {locale.averageMood(
                getAverageMoodDuringPastWeek({
                  checkIns,
                  averageAfter: Date.now(),
                })
              )}
            </p>
            <ul className="checkInsList">
              {checkIns.map(({ time, value }) => (
                <div key={time} className="checkInItem">
                  <span className="date">
                    {new Date(time).toLocaleDateString("en-gb")}
                  </span>
                  <span className="mood">{locale.mood(value)}</span>
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
        <h2>{locale.settings()}</h2>
        <button
          className="toggleButton"
          data-on={isDarkModeOn}
          onClick={onToggleDarkMode}
        >
          <div className="toggle">
            <div />
          </div>
          <div className="label">{locale.darkMode()}</div>
        </button>
      </div>
    </div>
  );
};

export default App;
