import { Link } from 'react-router'
import classes from '~/styles/NotFound.module.css'

export default function NotFound () {
  return <>
    <title>Game of Fifteen</title>

    <main className={classes['main']}>
      <h2 className={classes['h2']}>Page not found!</h2>
      <h3 className={classes['h3']}>Return to <Link to="/">Home</Link></h3>
    </main>
  </>
}
