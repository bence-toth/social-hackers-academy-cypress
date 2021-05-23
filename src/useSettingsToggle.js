import { useState } from "react";

const useSettingsToggle = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const onToggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return { isSettingsOpen, onToggleSettings };
};

export default useSettingsToggle;
