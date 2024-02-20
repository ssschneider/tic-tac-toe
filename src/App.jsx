import { useState } from "react";
import { GameBoard } from "./components/Gameboard";
import { Player } from "./components/Player";

function App() {
  const [ activePlayer, setActivePlayer ] = useState("X");

  function handlePlayerSwitch () {
    setActivePlayer(currentlyActivePlayer => currentlyActivePlayer === "X" ? "O" : "X");
  };

	return (
    <>
      <header>
        <img src="game-logo.png" alt="Tic-Tac-Toe Logo" />
        <h1>Tic Tac Toe</h1>
      </header>
      <main>
        <div id="game-container">
          {/* PLAYERS */}
          <ol id="players" className="highlight-player" >
            <Player playerName="Player 01" symbol="X" isActive={activePlayer === "X"} />
            <Player playerName="Player 02" symbol="O" isActive={activePlayer === "O"}/>
          </ol>
          
          {/* GAME BOARD */}
          <GameBoard onPlayerSwitch={handlePlayerSwitch} activePlayer={activePlayer} />
        </div>

        {/* GAME LOG */}

      </main>
    </>
	);
}

export default App;
