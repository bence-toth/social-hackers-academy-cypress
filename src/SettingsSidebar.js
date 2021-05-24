import locale from "./locale";
import ToggleButton from "./ToggleButton";

import "./SettingsSidebar.css";

const SettingsSidebar = ({ isOpen, isDarkModeOn, onToggleDarkMode }) => (
  <div className="settings" data-open={isOpen}>
    <h2>{locale.settings()}</h2>
    <ToggleButton
      dataTestid="darkModeToggleButton"
      isOn={isDarkModeOn}
      onToggle={onToggleDarkMode}
      label={locale.darkMode()}
    />
  </div>
);

export default SettingsSidebar;
