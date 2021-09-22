import React, { useRef, useState, useCallback } from "react";
import { useFrame } from "@react-three/fiber";
import { useGameState } from "../hooks/useGameState";
import { getRandomPosition, isHit } from "../utils";
import { UNIT_SIZE } from "../constants";
import { Raycaster } from "three";

let x = 100;
let z = 100;

const Snake = ({ direction, state, update }) => {
  const mesh = useRef();
  const handleMovement = useCallback(
    (food) => {
      const snakeMesh = mesh.current;
      snakeMesh.position[direction.axis] += 1 * direction.direction;
      const directionVector = snakeMesh.getWorldDirection();
      const ray = new Raycaster(snakeMesh.position, directionVector);
      const collisionResults = ray.intersectObject(food);
      if (
        collisionResults.length > 0 &&
        collisionResults[0].distance < directionVector.length()
      ) {
        const newPos = getRandomPosition();
        food.position.set(newPos.x, newPos.y, newPos.z);
        snakeMesh.scale.z += 5;
      }
    },
    [direction]
  );

  useFrame((state) => {
    handleMovement(state.scene.getObjectByName("food"));
    // mesh.current.position.set(i, 0)
  });

  return (
    <mesh
      ref={mesh}
      scale={[UNIT_SIZE, UNIT_SIZE, UNIT_SIZE]}
      position={[x, 0, z]}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={"orange"} />
    </mesh>
  );
};

export default Snake;
