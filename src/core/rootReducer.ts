import { combineReducers } from "redux"

import { appReducer } from "../core/reducers"
import { registrationReducer } from "../core/reducers/registrationReducer"
import { loginReducer } from "../core/reducers/loginReducer"
import { newPasswordReducer } from "../core/reducers/newPasswordReducer"

export const rootReducer = combineReducers({
  app: appReducer,
  registration: registrationReducer,
  login: loginReducer,
  newPassword: newPasswordReducer,
})