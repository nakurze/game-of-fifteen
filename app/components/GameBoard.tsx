import styled from 'styled-components'
import { useContext, useEffect, type Dispatch as TDispatch } from 'react'
import { State, Dispatch } from '~/contexts/game'
import { EActions, type IAction, type IState } from '~/types/state'
import Tile from '~/components/Tile'
import classes from '~/styles/Board.module.css'

const Tiles = styled.div<{ $isSolved: boolean }>`
  border: 5px solid ${props => props.$isSolved ? "darkgreen" : "darkred"};
`

export default function GameBoard () {
  const state = useContext(State) as IState
  const dispatch = useContext(Dispatch) as TDispatch<IAction>

  useEffect(() => {
    if (state.isStarted && state.isSolved) {
      dispatch({ type: EActions.END_GAME })
      navigator.vibrate([90, 110, 90, 10, 90, 10, 290, 110])
    }
  }, [state.isStarted, state.isSolved, dispatch])

  return (
    <Tiles className={classes['tiles']} $isSolved={state.isSolved}>{
      state.tiles.map((tile: number) => tile === 16
        ? <div key={tile} style={{ width: '80px', height: '80px' }} />
        : <Tile key={tile} value={tile} />
      )
    }</Tiles>
  )
}
