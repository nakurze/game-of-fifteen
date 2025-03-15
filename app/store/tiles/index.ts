import * as A from './actions'
import * as T from '~/types/state'

export default function reducer (state: T.IState, action: T.IAction) {
  switch (action.type) {
    case T.EActions.SET_COUNT: return A.set(action.count as number, state)
    case T.EActions.RANDOMIZE_TILES: return A.randomize(state)
    case T.EActions.MOVE_TILE: return A.move(action.tile as number, state)
    case T.EActions.END_GAME: return A.end(state)

    default: throw Error('Unknown action: ' + action.type)
  }
}
