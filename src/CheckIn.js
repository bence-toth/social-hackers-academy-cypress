import CheckInButton from "./CheckInButton";
import locale from "./locale";

import "./CheckIn.css";

const CheckIn = ({ onAddCheckIn, areCheckInsVisible, onToggleCheckIns }) => (
  <div className="checkIn">
    <h1>{locale.checkInHeading()}</h1>
    <p className="howAreYouFeeling">{locale.checkInSubheading()}</p>
    <div>
      <CheckInButton mood={1} emoji="😢" onClick={() => onAddCheckIn(1)} />
      <CheckInButton mood={2} emoji="🙁" onClick={() => onAddCheckIn(2)} />
      <CheckInButton mood={3} emoji="😐" onClick={() => onAddCheckIn(3)} />
      <CheckInButton mood={4} emoji="😊" onClick={() => onAddCheckIn(4)} />
      <CheckInButton mood={5} emoji="🤩" onClick={() => onAddCheckIn(5)} />
    </div>
    {areCheckInsVisible ? (
      <button
        data-test-id="hideCheckIns"
        className="toggleCheckIns"
        onClick={onToggleCheckIns}
      >
        {locale.hideCheckIns()}
      </button>
    ) : (
      <button
        data-test-id="showCheckIns"
        className="toggleCheckIns"
        onClick={onToggleCheckIns}
      >
        {locale.showCheckIns()}
      </button>
    )}
  </div>
);

export default CheckIn;
