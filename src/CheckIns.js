import {
  getAverageMoodDuringPastWeek,
  hasCheckInsInThePastWeek,
} from "./utility";
import locale from "./locale";

import "./CheckIns.css";

const CheckIns = ({ checkIns }) => (
  <div className="checkIns">
    {checkIns.length === 0 && <p>{locale.noCheckInsYet()}</p>}
    {checkIns.length > 0 && (
      <>
        {hasCheckInsInThePastWeek({ checkIns, now: Date.now() }) && (
          <p className="averageMoodIndicator">
            {locale.averageMood(
              getAverageMoodDuringPastWeek({
                checkIns,
                now: Date.now(),
              })
            )}
          </p>
        )}
        <ul className="checkInsList">
          {checkIns.map(({ time, mood }) => (
            <li key={time} className="checkInItem">
              <span className="date">{locale.formattedDate(time)}</span>
              <span className="mood">{locale.mood(mood)}</span>
            </li>
          ))}
        </ul>
      </>
    )}
  </div>
);

export default CheckIns;
