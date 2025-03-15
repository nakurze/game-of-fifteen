import { useContext, type Dispatch as TDispatch } from 'react'
import { Dispatch } from '~/contexts/game'
import { EActions, type IAction } from '~/types/state'
import classes from '~/styles/Start.module.css'

export default function StartButton () {
  const dispatch = useContext(Dispatch) as TDispatch<IAction>

  const randomizeTiles = () => {
    dispatch({ type: EActions.RANDOMIZE_TILES })
  }

  return (
    <button
      type="button"
      className={classes['button']}
      onClick={randomizeTiles}
    >
      Shuffle
    </button>
  )
}
