import { useState } from "react";

const useCheckIns = () => {
  const [checkIns, setCheckIns] = useState([]);
  const onAddCheckIn = (value) => {
    setCheckIns([
      ...checkIns,
      {
        time: Date.now(),
        value,
      },
    ]);
  };

  return { checkIns, onAddCheckIn };
};

export default useCheckIns;
