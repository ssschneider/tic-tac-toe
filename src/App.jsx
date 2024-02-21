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

function deriveWinner (gameBoard, players) {
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
      winner = players[firstSquareSymbol];
    }
  };

  return winner;
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null], 
];

function App() {
	const [gameLog, setGameLog] = useState([]);
  const [ players, setPlayers ] = useState(
    { "X": "Player 01"},
    { "O": "Player 02"},
  );

	const activePlayer = deriveActivePlayer(gameLog);

  //GAMEBOARD
  let gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])];

    for (const play of gameLog) {
        const {square, player } = play;
        const { row, column } = square;

        gameBoard[row][column] = player;
    };

  //CHECKING FOR A WINNER OR A DRAW
  const winner = deriveWinner(gameBoard, players);
  const isADraw = Boolean(gameLog.length === 9 & !winner);

  // RESET THE GAME
  function handleResetGame () {
    setGameLog([]);
  };

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

  // HANDLE PLAYERS NAMES FOR BETTER UX
  function handlePlayerNameChange (symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
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
              updatePlayerName={handlePlayerNameChange}
						/>
						<Player
							playerName="Player 02"
							symbol="O"
							isActive={activePlayer === "O"}
              updatePlayerName={handlePlayerNameChange}
						/>
					</ol>

          {/* WINNING MESSAGE */}
          {(winner || isADraw) && <GameOver winner={winner} onResetGame={handleResetGame} /> }

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
