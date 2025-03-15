import StartButton from '~/components/StartButton'
import IterationsSelector from '~/components/IterationsSelector'
import GameBoard from '~/components/GameBoard'
import classes from '~/styles/Home.module.css'

export default function Home () {
  return <>
    <title>Game of Fifteen :: Home</title>

    <meta name="keywords" content="react example, play game of fifteen" />
    <meta name="description" content="Play Game of Fifteen" />

    <main className={classes['main']}>
      <h1 className={classes['h1']}>Game of Fifteen</h1>

      <IterationsSelector />
      <StartButton />
      <GameBoard />
    </main>
  </>
}
