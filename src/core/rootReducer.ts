import { combineReducers } from "redux"

import { appReducer } from "../core/reducers"
import { registrationReducer } from "../core/reducers/registrationReducer"

export const rootReducer = combineReducers({
  app: appReducer,
  registration: registrationReducer,
})