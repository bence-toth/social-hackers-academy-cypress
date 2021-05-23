import locale from "./locale";

import "./SettingsSidebar.css";

const SettingsSidebar = ({ isOpen, isDarkModeOn, onToggleDarkMode }) => (
  <div className="settings" data-open={isOpen}>
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
);

export default SettingsSidebar;
