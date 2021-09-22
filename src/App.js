import Arena from "./components/Arena";
import Food from "./components/Food";
import Controls from "./components/Controls";
import Snake from "./components/Snake";

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
      <Controls>
        <Snake state={state} update={update} />
      </Controls>
      <Arena size={state.arenaSize} unitSize={state.unitSize} />
    </GameCanvas>
  );
}

export default App;
