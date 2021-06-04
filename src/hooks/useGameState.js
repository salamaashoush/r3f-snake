import { createContext, useContext, useState } from "react";
import { ARENA_SIZE, UNIT_SIZE } from "../constants";
import { getRandomFood, getRandomPosition } from "../utils";

const initialState = {
  arenaSize: ARENA_SIZE,
  unitSize: UNIT_SIZE,
  currentFoodPosition: getRandomPosition(),
  currentFoodType: getRandomFood(),
  snakeDirection: "up",
  snakeSegments: [],
};
export const GameStateContext = createContext({
  state: initialState,
  update: null,
});

export function GameStateProvider({ children }) {
  const [state, setState] = useState(initialState);

  return (
    <GameStateContext.Provider value={{ state, update: setState }}>
      {children}
    </GameStateContext.Provider>
  );
}

export function useGameState() {
  const context = useContext(GameStateContext);
  if (context === null) {
    throw new Error("<GameStateProvider/> not found");
  }
  return context;
}
