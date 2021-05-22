import { useState } from "react";
import "./App.css";

const App = () => {
  const [areCheckInsVisible, setAreCheckInsVisible] = useState(false);
  const onToggleCheckIns = () => {
    setAreCheckInsVisible(!areCheckInsVisible);
  };

  const [checkIns, setCheckIns] = useState([]);
  const addCheckIn = (value) => {
    setCheckIns([
      ...checkIns,
      {
        time: Date.now(),
        value,
      },
    ]);
  };

  return (
    <div className="app" data-check-ins-open={areCheckInsVisible}>
      <div className="checkIn">
        <h1>Check in with yourself</h1>
        <p>How are you feeling right now?</p>
        <div>
          <button onClick={() => addCheckIn(1)}>
            <div>😢</div>
            <div>Awful</div>
          </button>
          <button onClick={() => addCheckIn(2)}>
            <div>🙁</div>
            <div>Bad</div>
          </button>
          <button onClick={() => addCheckIn(3)}>
            <div>😐</div>
            <div>Okay</div>
          </button>
          <button onClick={() => addCheckIn(4)}>
            <div>😊</div>
            <div>Good</div>
          </button>
          <button onClick={() => addCheckIn(5)}>
            <div>🤩</div>
            <div>Awesome</div>
          </button>
        </div>
        <button className="toggleCheckIns" onClick={onToggleCheckIns}>
          Show previous check-ins
        </button>
      </div>
      <div className="checkIns">
        {checkIns.length === 0 && <p>You have no check-ins yet.</p>}
        {checkIns.length > 0 && (
          <ul>
            {checkIns.map(({ time, value }) => (
              <div key={time}>
                <span>{time}</span>
                <span>{value}</span>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
