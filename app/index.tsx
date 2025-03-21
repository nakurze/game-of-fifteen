import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router'
import Default from '~/layouts/Default'
import Game from '~/views/Game'

const GlobalCSS = createGlobalStyle`
  @font-face {
    font-family: Barrio;
    font-display: swap;
    src: url(/fonts/Barrio-Regular.ttf);
  }
  @media (prefers-reduced-motion) {
    ::view-transition-group(*),
    ::view-transition-old(*),
    ::view-transition-new(*) {
      animation: none !important;
    }
  }
`

createRoot(document.querySelector('app-layout') as HTMLElement).render(
  <StrictMode>
    <GlobalCSS />

    <BrowserRouter>
      <Routes>
        <Route element={<Default />}>
          <Route path="*" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
