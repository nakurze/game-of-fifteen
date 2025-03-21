import { use, type Dispatch as TDispatch } from 'react'
import { State, Dispatch } from '~/contexts/tiles'
import { getLegalMoves, getRandomNumber, animate } from '~/helpers'
import { EActions, type IState, type IAction } from '~/types/tiles'
import css from '~/styles/Button.module.css'

export default function Button () {
  const { isStarted, shufflesCount } = use(State) as IState
  const dispatch = use(Dispatch) as TDispatch<IAction>

  async function clickHandler () {
    let lastMove = 0
    let currentIteration = 0
    let tiles = Array.from({ length: 16 }, (_, idx) => ++idx)

    await animate(() => {
      dispatch({ type: EActions.SET_IS_SHUFFLING, bool: true })
      dispatch({ type: EActions.START_GAME })
    })

    while (currentIteration < shufflesCount) {
      const idx = tiles.findIndex(tile => tile === 16)
      const moves = getLegalMoves(idx, lastMove)

      lastMove = moves.length > 1
        ? moves[await getRandomNumber(moves.length - 1)] as number
        : moves[0] as number

      tiles = tiles
        .with(idx, tiles[idx + lastMove] as number)
        .with(idx + lastMove, 16)

      await animate(() => {
        dispatch({ type: EActions.SET_TILES, arr: tiles })
        
      })

      currentIteration++
    }

    await animate(() => {
      dispatch({ type: EActions.SET_IS_SHUFFLING, bool: false })
    })
  }

  return (
    <button
      type="button"
      className={css["button"]}
      disabled={isStarted}
      onClick={clickHandler}
    >
      <img src="images/shuffle.svg" alt="shuffle" />
      Nová hra
    </button>
  )
}
