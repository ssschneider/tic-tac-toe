export const WINNING_COMBINATIONS = [
    // ROWS
	[
		{ row: 0, column: 0 },
		{ row: 0, column: 1 },
		{ row: 0, column: 2 },
	],
	[
		{ row: 1, column: 0 },
		{ row: 1, column: 1 },
		{ row: 1, column: 2 },
	],
	[
		{ row: 2, column: 0 },
		{ row: 2, column: 1 },
		{ row: 2, column: 2 },
	],
    // COLUMNS
	[
		{ row: 0, column: 0 },
		{ row: 1, column: 0 },
		{ row: 2, column: 0 },
	],
	[
		{ row: 0, column: 1 },
		{ row: 1, column: 1 },
		{ row: 2, column: 1 },
	],
	[
		{ row: 0, column: 2 },
		{ row: 1, column: 2 },
		{ row: 2, column: 2 },
	],
    // DIAGONALS
	[
		{ row: 0, column: 0 },
		{ row: 1, column: 1 },
		{ row: 2, column: 2 },
	],
	[
		{ row: 0, column: 2 },
		{ row: 1, column: 1 },
		{ row: 2, column: 0 },
	],
];
