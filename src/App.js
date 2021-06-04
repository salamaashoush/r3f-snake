import { useFrame } from "@react-three/fiber";
import Arena from "./components/Arena";
import Food from "./components/Food";

import GameCanvas from "./components/GameCanvas";
import { useGameState } from "./hooks/useGameState";

function App() {
  const { state, update } = useGameState();
  // useEffect(() => {
  //   update({ ...state, food: true });
  // }, [update, state]);
  return (
    <GameCanvas>
      <Food
        size={state.unitSize}
        type={state.currentFoodType}
        position={state.currentFoodPosition}
      />
      <Arena size={state.arenaSize} unitSize={state.unitSize} />
    </GameCanvas>
  );
}

export default App;
