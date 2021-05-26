import { useState } from "react";

const useCheckIns = () => {
  const [checkIns, setCheckIns] = useState([]);
  const onAddCheckIn = (mood) => {
    const time = Date.now();

    setCheckIns([
      ...checkIns,
      {
        time,
        mood,
        shouldShowNotification: true,
      },
    ]);

    setTimeout(() => {
      setCheckIns((previousCheckIns) => {
        return previousCheckIns.map((checkIn) => {
          if (time !== checkIn.time) {
            return checkIn;
          } else {
            return {
              ...checkIn,
              shouldShowNotification: false,
            };
          }
        });
      });
    }, 3000);
  };

  return { checkIns, onAddCheckIn };
};

export default useCheckIns;
