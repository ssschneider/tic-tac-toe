const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null], 
];

export function GameBoard ({onPlayerSwitch, plays}) {
    let gameBoard = initialGameBoard;

    for (const play of plays) {
        const {square, player } = play;
        const { row, column } = square;

        gameBoard[row][column] = player;
    };

    return (
        <ol id="game-board">
            {gameBoard.map((boardRow, rowIndex) => <li key={rowIndex}>
                <ol>
                    {boardRow.map((playerSymbol, columnIndex) => <li key={columnIndex}>
                        <button onClick={() =>onPlayerSwitch(rowIndex, columnIndex)}>{playerSymbol}</button>
                    </li>
                    )}
                </ol>
            </li>
            )}
        </ol>
    )
};