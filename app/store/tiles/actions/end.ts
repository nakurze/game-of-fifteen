import type { IState } from '~/types/state'

export default (state: IState) => ({
  ...state, isStarted: false
})
