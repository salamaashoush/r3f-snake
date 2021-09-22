import { createContext, useContext, useState } from "react";
import { ARENA_SIZE, UNIT_SIZE } from "../constants";
import { getRandomPosition } from "../utils";

const initialState = {
  arenaSize: ARENA_SIZE,
  unitSize: UNIT_SIZE,
  currentFoodPosition: getRandomPosition(),
  currentFoodType: "burger",
  snakeDirection: "up",
  snakeSegments: [],
};
export const GameStateContext = createContext({
  state: initialState,
  update: () => {},
});

export function GameStateProvider({ children }) {
  const [state, setState] = useState(initialState);

  return (
    <GameStateContext.Provider
      value={{ state, update: (state) => setState(state) }}
    >
      {children}
    </GameStateContext.Provider>
  );
}

export function useGameState() {
  const context = useContext(GameStateContext);
  if (context === null) {
    throw new Error("<GameStateProvider/> not found");
  }
  console.log(context);
  return context;
}
