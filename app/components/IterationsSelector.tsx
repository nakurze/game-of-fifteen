import { useContext, useId, type ChangeEvent, type Dispatch as TDispatch } from 'react'
import { State, Dispatch } from '~/contexts/game'
import * as T from '~/types/state'

export default function IterationsSelector () {
  const countId = useId()
  const state = useContext(State) as T.IState
  const dispatch = useContext(Dispatch) as TDispatch<T.IAction>

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: T.EActions.SET_COUNT,
      count: parseInt(evt.target.value)
    })
  }

  return <>
    <label htmlFor={countId}>
      Shuffle steps: {state.iterationsCount}
    </label>

    <input
      type="range"
      min="1"
      max="100"
      step="1"
      id={countId}
      value={state.iterationsCount}
      onChange={changeHandler}
    />
  </>
}
