import { useReducer } from 'react'
import * as Tiles from '~/contexts/tiles'
import Button from '~/components/Button'
import Slider from '~/components/Slider'
import Board from '~/components/Board'
import css from '~/styles/Game.module.css'

export default function Game () {
  const [state, dispatch] = useReducer(
    Tiles.reducer,
    Tiles.initialState
  )

  return <>
    <title>Hlavolam "15" :: Hra</title>

    <meta name="keywords" content="Hraj hru Hlavolam 15. Play 15 Puzzle game." />
    <meta name="description" content="Príklad React 19 aplikácie." />

    <header className={css["header"]}>
      <h1>Hlavolam "15"</h1>
    </header>

    <main className={css["main"]}>
      <Tiles.State.Provider value={state}>
        <Tiles.Dispatch.Provider value={dispatch}>
          <form>
            <Slider />
            <Button /> 
          </form>
          <Board />
        </Tiles.Dispatch.Provider>
      </Tiles.State.Provider>
    </main>
  </>
}
