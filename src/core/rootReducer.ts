import { combineReducers } from "redux"
import { appReducer, registrationReducer, loginReducer, newPasswordReducer, resetPasswordReducer } from "../core/reducers"

export const rootReducer = combineReducers({
  app: appReducer,
  login: loginReducer,
  newPassword: newPasswordReducer,
  registration: registrationReducer,
  resetPassword: resetPasswordReducer
})