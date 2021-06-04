import React, { useMemo } from "react";
import { createGridLines } from "../utils";

export default function Arena({ size = 100, unitSize = 5 }) {
  const gridGeometry = useMemo(
    () => createGridLines(size, unitSize),
    [size, unitSize]
  );
  return (
    <lineSegments geometry={gridGeometry}>
      <lineBasicMaterial />
    </lineSegments>
  );
}
