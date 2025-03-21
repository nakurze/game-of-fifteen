import { use, type MouseEvent, type Dispatch as TDispatch } from 'react'
import styled from 'styled-components'
import { State, Dispatch } from '~/contexts/tiles'
import { getMove, isSorted, animate } from '~/helpers'
import { EActions, type IAction, type IState } from '~/types/tiles'

const Square = styled.div<{ $isInPlace: boolean }>`
  width: 80px;
  height: 80px;
  display: grid;
  place-content: center;
  border-radius: 0.5rem;
  font-family: Barrio;
  font-size: 2rem;
  font-size: 4rem;
  font-weight: 700;
  color: #f9f9f9;
  -webkit-user-select: none;
  user-select: none;
  background-color: ${
    props => props.$isInPlace ? "#85358d" : "#652a7b"
  };
`

export default function Tile ({ num }: { num: number }) {
  const { tiles, isStarted } = use(State) as IState
  const dispatch = use(Dispatch) as TDispatch<IAction>
  const idx = tiles.findIndex(elm => elm === num)
  const isInPlace = num === idx + 1

  async function clickHandler (evt: MouseEvent) {
    if (!isStarted) return

    const pattern = [75, 125, 75, 25, 75, 25, 300]
    const target = evt.target as HTMLDivElement
    const idx = tiles.findIndex(elm => elm === num)
    const move = getMove(idx, tiles)
    const copy = tiles.with(idx, 16).with(idx + move, num as number)
    const end = isSorted(copy)

    if (move) {
      navigator.vibrate(30)
      target.style.viewTransitionName = 'tile'

      await animate(() => {
        dispatch({ type: EActions.SET_TILES, arr: copy })
        if (end) dispatch({ type: EActions.END_GAME })
      })

      target.style.viewTransitionName = ''
      if (end) navigator.vibrate(pattern)
    }
  }
  
  return <Square $isInPlace={isInPlace} onClick={clickHandler}>{num}</Square>
}
