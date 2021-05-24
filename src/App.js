import useDarkMode from "./useDarkMode";
import useCheckInsToggle from "./useCheckInsToggle";
import useCheckIns from "./useCheckIns";
import CheckIn from "./CheckIn";
import CheckIns from "./CheckIns";
import Settings from "./Settings";

import "./App.css";

const App = () => {
  const { checkIns, onAddCheckIn } = useCheckIns();
  const { areCheckInsVisible, onToggleCheckIns } = useCheckInsToggle();
  const { isDarkModeOn, onToggleDarkMode } = useDarkMode();

  return (
    <div
      className="app"
      data-test-id="app"
      data-test-dark-mode={isDarkModeOn}
      data-check-ins-open={areCheckInsVisible}
      data-dark-mode={isDarkModeOn}
    >
      <CheckIn
        onAddCheckIn={onAddCheckIn}
        areCheckInsVisible={areCheckInsVisible}
        onToggleCheckIns={onToggleCheckIns}
      />
      <CheckIns checkIns={checkIns} />
      <Settings
        isDarkModeOn={isDarkModeOn}
        onToggleDarkMode={onToggleDarkMode}
      />
    </div>
  );
};

export default App;
