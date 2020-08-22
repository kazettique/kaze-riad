import React from "react"
import { bindActionCreators } from "redux"
import {
  useSelector as useReduxSelector,
  useDispatch,
  TypedUseSelectorHook,
} from "react-redux"
import { RootStore } from "./store"

import app from "./app/action"

export const useSelector: TypedUseSelectorHook<RootStore> = useReduxSelector

export function useAction() {
  const dispatch = useDispatch()
  return React.useMemo(
    () => ({
      app: bindActionCreators(app, dispatch),
    }),
    [dispatch],
  )
}
