import useSettingsToggle from "./useSettingsToggle";
import HamburgerMenu from "./HamburgerMenu";
import locale from "./locale";

import "./Settings.css";

const Settings = ({ isDarkModeOn, onToggleDarkMode }) => {
  const { isSettingsOpen, onToggleSettings } = useSettingsToggle();

  return (
    <>
      <HamburgerMenu isOpen={isSettingsOpen} onClick={onToggleSettings} />
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
