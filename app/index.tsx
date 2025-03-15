import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '~/App.css'
import App from '~/App'

createRoot(document.querySelector('game-of-fifteen')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
