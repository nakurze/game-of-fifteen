import type { IState } from '~/types/state'

export default (state: IState) => {
  let lastMove = 0
  let tiles = [...state.tiles]

  for (let i = 0; i < state.iterationsCount; i++) {
    const moves: number[] = []
    const idx = tiles.findIndex(tile => tile === 16)
    const row = Math.floor(idx / 4)
    const col = idx % 4

    if (col < 3 && lastMove !== -1) moves.push(1)
    if (col > 0 && lastMove !== 1) moves.push(-1)
    if (row < 3 && lastMove !== -4) moves.push(4)
    if (row > 0 && lastMove !== 4) moves.push(-4)

    lastMove = moves[
      Math.floor(Math.random() * moves.length)
    ] as number

    tiles = tiles
      .with(idx, tiles[idx + lastMove] as number)
      .with(idx + lastMove, 16)
  }

  return { ...state, tiles, isStarted: true, isSolved: false }
}
