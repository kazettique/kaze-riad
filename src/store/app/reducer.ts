import { Reducer } from "redux"
import { Action, SET_NAVIGATOR } from "./action"

interface AppStoreType {
  navOpen: boolean
}

export type AppStore = Readonly<AppStoreType>

const init: AppStore = {
  navOpen: false,
}

export const appReducer: Reducer<AppStore, Action> = (
  state = init,
  action,
): AppStore => {
  switch (action.type) {
    case SET_NAVIGATOR:
      return { ...state, navOpen: action.open }
    default:
      return state
  }
}
