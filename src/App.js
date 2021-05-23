import useDarkMode from "./useDarkMode";
import useCheckInsToggle from "./useCheckInsToggle";
import useCheckIns from "./useCheckIns";
import CheckIn from "./CheckIn";
import CheckIns from "./CheckIns";
import Settings from "./Settings";

import "./App.css";

// TODO: Add unit tests:
// TODO: Test that CheckIns component shows no check-ins message
// TODO: Test that CheckIns component renders average check-ins and lists check-ins
// TODO: Test that average utility works as expected
// TODO: Test that Settings component toggles dark mode when clicked
// TODO: Check that hamburger menu toggles settings when clicked

const App = () => {
  const { checkIns, onAddCheckIn } = useCheckIns();
  const { areCheckInsVisible, onToggleCheckIns } = useCheckInsToggle();
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
      <Settings
        isDarkModeOn={isDarkModeOn}
        onToggleDarkMode={onToggleDarkMode}
      />
    </div>
  );
};

export default App;
