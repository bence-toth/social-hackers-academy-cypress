import { useState } from "react";

const useDarkMode = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);
  const onToggleDarkMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
  };

  return { isDarkModeOn, onToggleDarkMode };
};

export default useDarkMode;
