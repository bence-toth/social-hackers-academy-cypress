import { useState } from "react";

const useAreCheckInsVisible = () => {
  const [areCheckInsVisible, setAreCheckInsVisible] = useState(false);
  const onToggleCheckIns = () => {
    setAreCheckInsVisible(!areCheckInsVisible);
  };

  return { areCheckInsVisible, onToggleCheckIns };
};

export default useAreCheckInsVisible;
