export const SET_NAVIGATOR = "SET_NAVIGATOR"

export interface SetNavigatorAction {
  type: typeof SET_NAVIGATOR
  open: boolean
}

export function setNavigator(open: boolean) {
  return { type: SET_NAVIGATOR, open }
}

const actionCreators = {
  setNavigator,
}

export default actionCreators

export type Action = SetNavigatorAction
