import React, { createContext } from "react"

export interface LoggerLog {
  id: string
  data: unknown
  variant?: "info" | "warn" | "error"
}

const actionTypes = {
  ADD_LOG: "ADD_LOG",
  RESET_LOG: "RESET_LOG",
} as const

type ActionType = typeof actionTypes

type Action =
  | { type: ActionType["ADD_LOG"]; payload: LoggerLog }
  | { type: ActionType["RESET_LOG"] }

interface LoggerState {
  logs: LoggerLog[]
}

const reducer = (state: LoggerState, action: Action): LoggerState => {
  switch (action.type) {
    case actionTypes.ADD_LOG:
      return {
        ...state,
        logs: [action.payload, ...state.logs],
      }

    case actionTypes.RESET_LOG:
      return { ...state, logs: [] }

    default:
      throw new Error(
        `Invalid action  type: ${action}, expected in ${Object.values(actionTypes).join(", ")}`,
      )
  }
}

const listeners: Array<(state: LoggerState) => void> = []
let memoryState: LoggerState = { logs: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}
type Log = Omit<LoggerLog, "id">
export function log({ variant = "info", ...rest }: Log) {
  const id = crypto.randomUUID()

  return dispatch({ type: "ADD_LOG", payload: { ...rest, variant, id } })
}

export function reset() {
  return dispatch({ type: "RESET_LOG" })
}

export const LoggerContext = createContext<LoggerState>({ logs: [] })

export function useLog() {
  const [state, setState] = React.useState<LoggerState>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return { ...state, log, reset }
}
