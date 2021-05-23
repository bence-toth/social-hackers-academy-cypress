import { getAverageMoodDuringPastWeek } from "./utility";
import locale from "./locale";

import "./CheckIns.css";

const CheckIns = ({ checkIns }) => (
  <div className="checkIns">
    {checkIns.length === 0 && <p>{locale.noCheckInsYet()}</p>}
    {checkIns.length > 0 && (
      <>
        <p className="averageMoodIndicator">
          {locale.averageMood(
            getAverageMoodDuringPastWeek({
              checkIns,
              averageAfter: Date.now(),
            })
          )}
        </p>
        <ul className="checkInsList">
          {checkIns.map(({ time, value }) => (
            <div key={time} className="checkInItem">
              <span className="date">{locale.formattedDate(time)}</span>
              <span className="mood">{locale.mood(value)}</span>
            </div>
          ))}
        </ul>
      </>
    )}
  </div>
);

export default CheckIns;
