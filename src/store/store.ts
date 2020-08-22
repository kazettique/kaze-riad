import {
  createStore,
  applyMiddleware,
  combineReducers,
  Middleware,
} from "redux"

import { AppStore, appReducer } from "./app/reducer"

export interface RootStore {
  app: AppStore
}

export const rootReducer = combineReducers({
  app: appReducer,
})

export function configureStore() {
  const middlewares: Middleware[] = []
  const storeEnhancers = applyMiddleware(...middlewares)
  const store = createStore(rootReducer, undefined, storeEnhancers)

  return store
}
