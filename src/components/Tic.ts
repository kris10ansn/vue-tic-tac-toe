export enum Tic {
    Empty = 0,
    X = 1,
    O = 2,
}

export function stringifyTic(tic: Tic) {
    return {
        [Tic.O]: "O",
        [Tic.X]: "X",
        [Tic.Empty]: "Empty",
    }[tic];
}
