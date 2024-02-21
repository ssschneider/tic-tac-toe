import { useState } from "react";
import { GameBoard } from "./components/Gameboard";
import { Player } from "./components/Player";
import { PlayLog } from "./components/Log";
import { WINNING_COMBINATIONS } from "./components/winning-combination";
import { GameOver } from "./components/GameOver";

function deriveActivePlayer(gameLog) {
	let activePlayer = "X";

	if (gameLog.length > 0 && gameLog[0].player === "X") {
		activePlayer = "O";
	}

	return activePlayer;
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null], 
];

function App() {
	const [gameLog, setGameLog] = useState([]);

	const activePlayer = deriveActivePlayer(gameLog);

  //GAMEBOARD
  let gameBoard = initialGameBoard;

    for (const play of gameLog) {
        const {square, player } = play;
        const { row, column } = square;

        gameBoard[row][column] = player;
    };

  //CHECKING FOR A WINNER
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if (
        firstSquareSymbol && 
        firstSquareSymbol === secondSquareSymbol && 
        firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  };

  const isADraw = Boolean(gameLog.length === 9 & !winner);

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

          {/* WINNING MESSAGE */}
          {(winner || isADraw) && <GameOver winner={winner} /> }

					{/* GAME BOARD */}
					<GameBoard
						onPlayerSwitch={handlePlayerSwitch}
						board={gameBoard}
					/>
				</div>

				{/* GAME LOG */}
				<PlayLog gameLog={gameLog} />
			</main>
		</>
	);
};

export default App;
