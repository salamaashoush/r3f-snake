import { Suspense } from "react";

import GameCanvas from "./components/GameCanvas";
import Burger from "./models/food/Burger";

function App() {
  return (
    <div className="canvas-container">
      <Suspense fallback={null}>
        <GameCanvas>
          <Burger />
        </GameCanvas>
      </Suspense>
    </div>
  );
}

export default App;
