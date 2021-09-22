import React from "react";
import { Vector3 } from "three";
import { UNIT_SIZE } from "../constants";
import Banana from "../models/food/Banana";
import Burger from "../models/food/Burger";
import Donut from "../models/food/Donut";
import { getRandomFood, getRandomPosition } from "../utils";

const foodType = {
  banana: Banana,
  burger: Burger,
  donut: Donut,
};

export default function Food({
  position = getRandomPosition(),
  size = UNIT_SIZE,
  type = getRandomFood(),
}) {
  // const FoodComponent = foodType[type];
  return (
    <mesh scale={[size, size, size]} position={position} name="food">
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={"red"} />
    </mesh>
  );
  // return (
  //   <FoodComponent scale={new Vector3(size, size, size)} position={position} />
  // );
}
