import { Suspense } from "react";
import Arena from "./components/Arena";
import Food from "./components/Food";

import GameCanvas from "./components/GameCanvas";
import { ARENA_SIZE, UNIT_SIZE } from "./constants";

function App() {
  return (
    <GameCanvas>
      <Food size={UNIT_SIZE} />
      <Food size={UNIT_SIZE} />

      <Food size={UNIT_SIZE} />

      <Food size={UNIT_SIZE} />

      <Food size={UNIT_SIZE} />
      <Food size={UNIT_SIZE} />

      <Arena size={ARENA_SIZE} unitSize={UNIT_SIZE} />
    </GameCanvas>
  );
}

export default App;
