import useSettingsToggle from "./useSettingsToggle";
import HamburgerMenu from "./HamburgerMenu";
import SettingsSidebar from "./SettingsSidebar";

import "./Settings.css";

const Settings = ({ isDarkModeOn, onToggleDarkMode }) => {
  const { isSettingsOpen, onToggleSettings } = useSettingsToggle();

  return (
    <>
      <HamburgerMenu isOpen={isSettingsOpen} onClick={onToggleSettings} />
      <div className="settingsOverlay" data-visible={isSettingsOpen}></div>
      <SettingsSidebar
        isOpen={isSettingsOpen}
        isDarkModeOn={isDarkModeOn}
        onToggleDarkMode={onToggleDarkMode}
      />
    </>
  );
};

export default Settings;
