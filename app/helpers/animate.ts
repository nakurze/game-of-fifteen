import { flushSync } from 'react-dom'

export default async function animate (updater: () => void) {
  const cb = () => { flushSync(updater) }

  if (document.startViewTransition) {
    await document.startViewTransition(cb).finished
  } else {
    updater()
  }
}
