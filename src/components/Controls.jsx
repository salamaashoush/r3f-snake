import React, { useState, useMemo, useCallback } from "react";

import { useKeyboard } from "../hooks/useKeyboard";
import { directionToAxis } from "../utils";

const Controls = ({ children }) => {
  const [direction, setDirection] = useState(directionToAxis("up"));
  const updateDirection = useCallback(
    (d) => {
      setDirection(directionToAxis(d));
    },
    [setDirection]
  );
  useKeyboard(["ArrowUp", "W", "w"], "up", updateDirection);
  useKeyboard(["ArrowDown", "S", "s"], "down", updateDirection);
  useKeyboard(["ArrowRight", "D", "d"], "right", updateDirection);
  useKeyboard(["ArrowLeft", "A", "a"], "left", updateDirection);

  return useMemo(() => {
    return React.cloneElement(children, { direction });
  }, [direction, children]);
};

export default Controls;
