import { Suspense } from 'react';

import GameCanvas from "./components/GameCanvas";
import Burger from './models/food/Burger'

function App() {
  return (
    <div className="canvas-container">
      <GameCanvas>
        <Suspense fallback={null}>
          <Burger />
        </Suspense>
      </GameCanvas>
    </div>
  );
}

export default App;
