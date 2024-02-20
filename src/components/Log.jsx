export function PlayLog ({gameLog}) {
    let playsLog = []

    for (const play of gameLog) {
        const {square, player } = play;
        const { row, column } = square;

        playsLog.push(`${player} on row ${row + 1} and column ${column + 1}`);
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