import type { IState } from '~/types/state'

export default (iterationsCount: number, state: IState) => ({
  ...state, iterationsCount
})
