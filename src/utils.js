import { BufferGeometry, Vector3 } from "three";
import { ARENA_SIZE, UNIT_SIZE } from "./constants";

export function getRandomPoint(gridSize, unitSize) {
  const pos = Math.floor(Math.random() * gridSize * 2);
  return pos - (pos % unitSize);
}
export function getRandomAxis(gridSize, unitSize) {
  const point = getRandomPoint(gridSize, unitSize);
  return point > gridSize
    ? gridSize - point - unitSize / 2
    : point - unitSize / 2;
}

export function getRandomPosition(gridSize = ARENA_SIZE, unitSize = UNIT_SIZE) {
  return new Vector3(
    getRandomAxis(gridSize, unitSize),
    0,
    getRandomAxis(gridSize, unitSize)
  );
}

export function createGridLines(gridSize = ARENA_SIZE, unitSize = UNIT_SIZE) {
  const geometry = new BufferGeometry();
  const points = [];
  for (let i = -gridSize; i <= gridSize; i += unitSize) {
    points.push(new Vector3(-gridSize, 0, i));
    points.push(new Vector3(gridSize, 0, i));
    points.push(new Vector3(i, 0, -gridSize));
    points.push(new Vector3(i, 0, gridSize));
  }
  geometry.setFromPoints(points);

  return geometry;
}

export function getRandomFood() {
  const types = ["banana", "burger", "apple"];
  const index = Math.floor(Math.random() * 2);
  return types[index];
}

export function directionToAxis(direction) {
  switch (direction) {
    case "up":
      return {
        axis: "z",
        direction: -1,
      };

    case "down":
      return {
        axis: "z",
        direction: 1,
      };

    case "right":
      return {
        axis: "x",
        direction: 1,
      };

    case "left":
      return {
        axis: "x",
        direction: -1,
      };

    default:
      return {
        axis: "x",
        direction: 1,
      };
  }
}

export function isHit(p1, p2) {
  if (p1.x === p2.x && p1.y === p2.y && p1.z === p2.z) {
    return true;
  }
  return false;
}
