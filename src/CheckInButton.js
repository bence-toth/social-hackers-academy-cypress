import locale from "./locale";

import "./CheckInButton.css";

const CheckInButton = ({ onClick, value, emoji }) => (
  <button className="checkInButton" onClick={onClick}>
    <div className="emoji">{emoji}</div>
    <div>{locale.mood(value)}</div>
  </button>
);

export default CheckInButton;
