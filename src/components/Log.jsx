export function PlayLog ({gameLog, playerName}) {
    let playsLog = []

    for (const play of gameLog) {
        const {square, player } = play;
        const { row, column } = square;

        const playerNameAndSymbol = playerName[player]

        playsLog.push(`${playerNameAndSymbol} with ${player} on row ${row + 1} and column ${column + 1}`);
    };

    return (
        <ol id="log">
            {playsLog.map((play, playIndex) => <li key={playIndex}>
                    {play}
                </li>
            )}
        </ol>
    )
};