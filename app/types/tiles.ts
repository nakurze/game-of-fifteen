export interface IState {
  tiles: Array<number>
  shufflesCount: number
  isShuffling: boolean
  isStarted: boolean
  isSolved: boolean
}

export interface IAction {
  type: string
  arr?: Array<number>
  num?: number
  bool?: boolean
}

export enum EActions {
  SET_TILES = 'set_tiles',
  SET_SHUFFLES_COUNT = 'set_shuffles_count',
  SET_IS_SHUFFLING = 'set_is_shuffling',
  START_GAME = 'start_game',
  END_GAME = 'end_game'
}
