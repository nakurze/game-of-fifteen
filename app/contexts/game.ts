import { createContext, type Dispatch as TDispatch } from 'react'
import type { IState, IAction } from '~/types/state'

export const State = createContext<IState | null>(null)
export const Dispatch = createContext<TDispatch<IAction> | null>(null)
