import { useState } from "react";
import { GameBoard } from "./components/Gameboard";
import { Player } from "./components/Player";
import { PlayLog } from "./components/Log";

function deriveActivePlayer(gameLog) {
	let activePlayer = "X";

	if (gameLog.length > 0 && gameLog[0].player === "X") {
		activePlayer = "O";
	}

	return activePlayer;
};

function App() {
	const [gameLog, setGameLog] = useState([]);

	const activePlayer = deriveActivePlayer(gameLog);

	function handlePlayerSwitch(rowIndex, columnIndex) {
		setGameLog(prevGameLog => {
			const currentPlayer = deriveActivePlayer(prevGameLog);

			const updatedGameLog = [
				{
					square: {
						row: rowIndex,
						column: columnIndex,
					},
					player: currentPlayer,
				},
				...prevGameLog,
			];

			return updatedGameLog;
		});
	}

	return (
		<>
			<header>
				<img src="game-logo.png" alt="Tic-Tac-Toe Logo" />
				<h1>Tic Tac Toe</h1>
			</header>
			<main>
				<div id="game-container">
					{/* PLAYERS */}
					<ol id="players" className="highlight-player">
						<Player
							playerName="Player 01"
							symbol="X"
							isActive={activePlayer === "X"}
						/>
						<Player
							playerName="Player 02"
							symbol="O"
							isActive={activePlayer === "O"}
						/>
					</ol>

					{/* GAME BOARD */}
					<GameBoard
						onPlayerSwitch={handlePlayerSwitch}
						plays={gameLog}
					/>
				</div>

				{/* GAME LOG */}
				<PlayLog gameLog={gameLog} />
			</main>
		</>
	);
}

export default App;
