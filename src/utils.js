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
