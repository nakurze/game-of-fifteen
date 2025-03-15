export enum EActions {
  SET_COUNT = 'set',
  RANDOMIZE_TILES = 'randomize',
  MOVE_TILE = 'move',
  END_GAME = 'end'
}

export interface IAction {
  type: string
  count?: number
  tile?: number
}

export interface IState {
  tiles: Array<number>
  iterationsCount: number
  isStarted: boolean
  isSolved: boolean
}
