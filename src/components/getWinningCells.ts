import { Tic } from "./Tic";
import range from "./range";

/**
 * Returns the winning cells if the provided tic has won. Returns [-1] for draw
 *
 * @param tic The tic to get winning cells for
 * @param board The board
 * @returns The winning cells
 */
export default function getWinningCells(tic: Tic, board: Tic[]): number[] {
    const diagonal1 = range(0, 3).map((i) => i + i * 3);
    const diagonal2 = range(0, 3).map((i) => 2 - i + 3 * i);

    if (diagonal1.every((i) => board[i] === tic)) return diagonal1;
    if (diagonal2.every((i) => board[i] === tic)) return diagonal2;

    for (let i = 0; i < 3; i++) {
        const horizontal = range(i * 3, i * 3 + 3);
        const vertical = range(0, 3).map((j) => i + j * 3);

        if (horizontal.every((j) => board[j] === tic)) return horizontal;
        if (vertical.every((j) => board[j] === tic)) return vertical;
    }

    if (board.every((value) => value !== Tic.Empty)) return [-1];

    return [];
}
