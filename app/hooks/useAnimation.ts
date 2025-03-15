import { useContext, type MouseEvent, type Dispatch as TDispatch } from 'react'
import { Dispatch } from '~/contexts/game'
import { EActions, type IAction } from '~/types/state'

export default function useAnimation () {
  const dispatch = useContext(Dispatch) as TDispatch<IAction>

  const animatedMove = (tile: number) => (evt: MouseEvent) => {
    const target = evt.target as HTMLDivElement
    target.style.viewTransitionName = 'tile'

    if (document.startViewTransition) {
      const transition = document.startViewTransition(() => {
        dispatch({ type: EActions.MOVE_TILE, tile })
      })

      transition.ready.then(() => {
        target.style.viewTransitionName = ''
      })
    } else {
      dispatch({ type: EActions.MOVE_TILE, tile })
    }
  }

  return { animatedMove }
}
