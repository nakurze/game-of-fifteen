import useAnimation from '~/hooks/useAnimation'
import classes from '~/styles/Tile.module.css'

export default function Tile ({ value }: { value: number }) {
  const { animatedMove } = useAnimation()

  return (
    <div className={classes['div']} onClick={animatedMove(value)}>
      {value}
    </div>
  )
}
