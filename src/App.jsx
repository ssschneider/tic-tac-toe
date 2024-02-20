import { GameBoard } from "./components/Gameboard";
import { Player } from "./components/Player";

function App() {
	return (
    <>
      <header>
        <img src="game-logo.png" alt="Tic-Tac-Toe Logo" />
        <h1>Tic Tac Toe</h1>
      </header>
      <main>
        <div id="game-container">
          {/* PLAYERS */}
          <ol id="players">
            <Player playerName="Player 01" symbol="X" />
            <Player playerName="Player 02" symbol="O" />
          </ol>
          
          {/* GAME BOARD */}
          <GameBoard />
        </div>

        {/* GAME LOG */}

      </main>
    </>
	);
}

export default App;
