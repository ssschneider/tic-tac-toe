export function GameBoard({ onPlayerSwitch, board }) {
	return (
		<ol id="game-board">
			{board.map((boardRow, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{boardRow.map((playerSymbol, columnIndex) => (
							<li key={columnIndex}>
								<button
									onClick={() =>
										onPlayerSwitch(rowIndex, columnIndex)
									}
									disabled={playerSymbol !== null}>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}
