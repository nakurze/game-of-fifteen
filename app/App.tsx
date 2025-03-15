import { useReducer } from 'react'
import { BrowserRouter } from 'react-router'

import Routes from '~/routes'
import reducer from '~/store/tiles'
import { State, Dispatch } from '~/contexts/game'

export default function App () {
  const [state, dispatch] = useReducer(reducer, {
    tiles: Array.from({ length: 16 }, (_, idx) => ++idx),
    iterationsCount: 50,
    isStarted: false,
    isSolved: true
  })

  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Dispatch.Provider>
    </State.Provider>
  )
}
