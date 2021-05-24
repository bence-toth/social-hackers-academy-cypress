import {
  getAverageMoodDuringPastWeek,
  hasCheckInsInThePastWeek,
} from "./utility";
import locale from "./locale";

import "./CheckIns.css";

const CheckIns = ({ checkIns }) => (
  <div data-test-id="checkIns" className="checkIns">
    {checkIns.length === 0 && (
      <p data-test-id="noCheckIns">{locale.noCheckInsYet()}</p>
    )}
    {checkIns.length > 0 && (
      <>
        {hasCheckInsInThePastWeek({ checkIns, now: Date.now() }) && (
          <p
            data-test-id="averageMood"
            data-test-value={getAverageMoodDuringPastWeek({
              checkIns,
              now: Date.now(),
            })}
            className="averageMoodIndicator"
          >
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
            <li
              key={time}
              data-test-id="checkInListItem"
              data-test-value={mood}
              className="checkInItem"
            >
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
