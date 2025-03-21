import { use } from 'react'
import { State } from '~/contexts/tiles'
import type { IState } from '~/types/tiles'
import { Tiles } from '~/components/Tiles'
import { Overlay } from '~/components/Overlay'
import { Spacer } from '~/components/Spacer'
import Tile from '~/components/Tile'

export default function Board () {
  const { tiles, isSolved, isShuffling } = use(State) as IState

  return (
    <Tiles $isSolved={isSolved}>
      {isShuffling && <Overlay />}

      {tiles.map((tile: number) => tile === 16
        ? <Spacer key={tile} />
        : <Tile key={tile} num={tile} />
      )}
    </Tiles>
  )
}
