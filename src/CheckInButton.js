import locale from "./locale";

import "./CheckInButton.css";

const CheckInButton = ({ onClick, mood, emoji }) => (
  <button
    data-test-id="registerMoodButton"
    data-test-value={mood}
    className="checkInButton"
    onClick={onClick}
  >
    <div className="emoji">{emoji}</div>
    <div>{locale.mood(mood)}</div>
  </button>
);

export default CheckInButton;
