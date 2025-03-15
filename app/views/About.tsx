import classes from '~/styles/About.module.css'
import pngImage from '~/assets/game-of-fifteen.png'

export default function About () {
  return <>
    <title>Game of Fifteen :: About</title>

    <meta name="keywords" content="about sliding gem puzzle game" />
    <meta name="description" content="About the Game of Fifteen" />

    <main className={classes['main']}>
      <h1 className={classes['h1']}>Game of Fifteen</h1>
      <img className={classes['img']} src={pngImage} alt="Unsolved Game of Fifteen" />

      <p className={classes['p']}>
        The 15 puzzle (also called Gem Puzzle, Boss Puzzle, Game of Fifteen,
        Mystic Square and more) is a sliding puzzle. It has 15 square tiles
        numbered 1 to 15 in a frame that is 4 tile positions high and 4 tile
        positions wide, with one unoccupied position. Tiles in the same row
        or column of the open position can be moved by sliding them
        horizontally or vertically, respectively. The goal of the puzzle is
        to place the tiles in numerical order &lpar;from left to right, top to
        bottom&rpar;.
      </p>

      <p className={classes['p']}>
        Named after the number of tiles in the frame, the 15 puzzle may also
        be called a "16 puzzle", alluding to its total tile capacity. Similar
        names are used for different sized variants of the 15 puzzle, such as
        the 8 puzzle, which has 8 tiles in a 3&times;3 frame.
      </p>
    </main>
  </>
}
