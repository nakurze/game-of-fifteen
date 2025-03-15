import { Outlet } from 'react-router'
import { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`
  body > game-of-fifteen {
    min-height: 100%;
    display: grid;
    grid-template-rows: 1fr;
    font-family: sans-serif;

    @media screen and (min-width: 576px) {
      width: 576px;
      margin: 0 auto;
    }
  }
`

export default function Layout () {
  return <>
    <Style />
    <Outlet />
  </>
}
