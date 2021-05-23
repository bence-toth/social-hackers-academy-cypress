import useSettingsToggle from "./useSettingsToggle";
import useDarkMode from "./useDarkMode";
import useCheckInsToggle from "./useCheckInsToggle";
import useCheckIns from "./useCheckIns";
import { getAverageMoodDuringPastWeek } from "./utility";
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
      <div className="checkIn">
        <h1>{locale.checkInHeading()}</h1>
        <p className="howAreYouFeeling">{locale.checkInSubheading()}</p>
        <div>
          <button className="checkInButton" onClick={() => onAddCheckIn(1)}>
            <div className="emoji">😢</div>
            <div>{locale.mood(1)}</div>
          </button>
          <button className="checkInButton" onClick={() => onAddCheckIn(2)}>
            <div className="emoji">🙁</div>
            <div>{locale.mood(2)}</div>
          </button>
          <button className="checkInButton" onClick={() => onAddCheckIn(3)}>
            <div className="emoji">😐</div>
            <div>{locale.mood(3)}</div>
          </button>
          <button className="checkInButton" onClick={() => onAddCheckIn(4)}>
            <div className="emoji">😊</div>
            <div>{locale.mood(4)}</div>
          </button>
          <button className="checkInButton" onClick={() => onAddCheckIn(5)}>
            <div className="emoji">🤩</div>
            <div>{locale.mood(5)}</div>
          </button>
        </div>
        <button className="toggleCheckIns" onClick={onToggleCheckIns}>
          {areCheckInsVisible ? locale.hideCheckIns() : locale.showCheckIns()}
        </button>
      </div>
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
