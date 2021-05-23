import useSettingsToggle from "./useSettingsToggle";
import useDarkMode from "./useDarkMode";
import useCheckInsToggle from "./useCheckInsToggle";
import useCheckIns from "./useCheckIns";
import CheckIn from "./CheckIn";
import CheckIns from "./CheckIns";
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
      <CheckIns checkIns={checkIns} />
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
