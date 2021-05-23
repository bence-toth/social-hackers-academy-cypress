import { useState } from "react";

const useCheckIns = () => {
  const [checkIns, setCheckIns] = useState([]);
  const onAddCheckIn = (mood) => {
    setCheckIns([
      ...checkIns,
      {
        time: Date.now(),
        mood,
      },
    ]);
  };

  return { checkIns, onAddCheckIn };
};

export default useCheckIns;
