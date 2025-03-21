import { createContext, type Dispatch as TDispatch } from 'react'
import { EActions, type IState, type IAction } from '~/types/tiles'

export const initialState = {
  tiles: Array.from({ length: 16 }, (_, idx) => ++idx),
  shufflesCount: 20,
  isShuffling: false,
  isStarted: false,
  isSolved: false
}

export function reducer (state: IState, action: IAction) {
  switch (action.type) {
    case EActions.SET_TILES: return {
      ...state, tiles: action.arr as Array<number>
    }
    case EActions.SET_SHUFFLES_COUNT: return {
      ...state, shufflesCount: action.num as number
    }
    case EActions.SET_IS_SHUFFLING: return {
      ...state, isShuffling: action.bool as boolean
    }
    case EActions.START_GAME: return {
      ...state, isStarted: true, isSolved: false
    }
    case EActions.END_GAME: return {
      ...state, isStarted: false, isSolved: true
    }
    default: throw Error('Unknown action: ' + action.type)
  }
}

export const State = createContext<IState | null>(null)
export const Dispatch = createContext<TDispatch<IAction> | null>(null)
