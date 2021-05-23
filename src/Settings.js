import useSettingsToggle from "./useSettingsToggle";
import locale from "./locale";

import "./Settings.css";

const Settings = ({ isDarkModeOn, onToggleDarkMode }) => {
  const { isSettingsOpen, onToggleSettings } = useSettingsToggle();

  return (
    <>
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
    </>
  );
};

export default Settings;
