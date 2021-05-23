import locale from "./locale";

import "./CheckIn.css";

const CheckIn = ({ onAddCheckIn, areCheckInsVisible, onToggleCheckIns }) => (
  <div className="checkIn">
    <h1>{locale.checkInHeading()}</h1>
    <p className="howAreYouFeeling">{locale.checkInSubheading()}</p>
    <div>
      <button className="checkInButton" onClick={() => onAddCheckIn(1)}>
        <div className="emoji">😢</div>
        <div>{locale.mood(1)}</div>
      </button>
      <button className="checkInButton" onClick={() => onAddCheckIn(2)}>
        <div className="emoji">🙁</div>
        <div>{locale.mood(2)}</div>
      </button>
      <button className="checkInButton" onClick={() => onAddCheckIn(3)}>
        <div className="emoji">😐</div>
        <div>{locale.mood(3)}</div>
      </button>
      <button className="checkInButton" onClick={() => onAddCheckIn(4)}>
        <div className="emoji">😊</div>
        <div>{locale.mood(4)}</div>
      </button>
      <button className="checkInButton" onClick={() => onAddCheckIn(5)}>
        <div className="emoji">🤩</div>
        <div>{locale.mood(5)}</div>
      </button>
    </div>
    <button className="toggleCheckIns" onClick={onToggleCheckIns}>
      {areCheckInsVisible ? locale.hideCheckIns() : locale.showCheckIns()}
    </button>
  </div>
);

export default CheckIn;
