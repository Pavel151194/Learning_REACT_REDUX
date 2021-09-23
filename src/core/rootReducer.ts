import { combineReducers } from "redux"

import { appReducer } from "../core/reducers"
import { registrationReducer } from "../core/reducers/registrationReducer"
import { loginReducer } from "../core/reducers/loginReducer"

export const rootReducer = combineReducers({
  app: appReducer,
  registration: registrationReducer,
  login: loginReducer
})