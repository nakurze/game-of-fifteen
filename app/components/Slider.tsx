import { use, useId } from 'react'
import { State, Dispatch } from '~/contexts/tiles'
import type { ChangeEvent, Dispatch as TDispatch } from 'react'
import { EActions, type IState, type IAction } from '~/types/tiles'
import css from '~/styles/Slider.module.css'

export default function Slider () {
  const countId = useId()
  const listId = useId()
  const { shufflesCount } = use(State) as IState
  const dispatch = use(Dispatch) as TDispatch<IAction>
  const range = Array.from({ length: 7 }, (_, i) => i ? i * 5 : 1)

  function changeHandler (evt: ChangeEvent<HTMLInputElement>) {
    const value = parseInt(evt.target.value)

    dispatch({
      type: EActions.SET_SHUFFLES_COUNT,
      num: value ? value * 5 : 1
    })
  }

  return <>
    <div className={css["slider"]}>
      <label htmlFor={countId}>
        Počet ťahov miešania: {shufflesCount}
      </label>

      <input
        type="range"
        min="0"
        max="6"
        step="1"
        id={countId}
        list={listId}
        defaultValue={Math.floor(shufflesCount / 5)}
        onChange={changeHandler}
      />
      
      <datalist id={listId}>{
        range.map((v, i) => <option
          value={i}
          label={(v).toString()}
          key={v}
        />)
      }</datalist>
    </div>
  </>
}
