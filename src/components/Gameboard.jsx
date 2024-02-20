import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null], 
];

export function GameBoard ({onPlayerSwitch, activePlayer}) {
    const [ gameBoard, setGameBoard ] = useState(initialGameBoard);

    function handlePlay (rowIndex, columnIndex) {
        setGameBoard(prevGameBoard => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][columnIndex] = activePlayer;

            return updatedBoard;
        });

        onPlayerSwitch();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((boardRow, rowIndex) => <li key={rowIndex}>
                <ol>
                    {boardRow.map((playerSymbol, columnIndex) => <li key={columnIndex}>
                        <button onClick={() => handlePlay(rowIndex, columnIndex)}>{playerSymbol}</button>
                    </li>
                    )}
                </ol>
            </li>
            )}
        </ol>
    )
};