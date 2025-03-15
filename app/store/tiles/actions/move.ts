import isSorted from './isSorted'
import type { IState } from '~/types/state'

export default (tile: number, state: IState) => {
  let move = 0
  let tiles = state.tiles
  let isSolved = state.isSolved

  const idx = tiles.findIndex(elm => elm === tile)
  const col = idx % 4
    
  if (tiles[idx + 4] === 16) move = +4
  if (tiles[idx - 4] === 16) move = -4
  if (col < 3 && tiles[idx + 1] === 16) move = +1
  if (col > 0 && tiles[idx - 1] === 16) move = -1

  if (move)  {
    navigator.vibrate(10)
    tiles = tiles.with(idx, 16).with(idx + move, tile)
  }

  if (isSorted(tiles)) isSolved = true
    
  return { ...state, tiles, isSolved }
}
