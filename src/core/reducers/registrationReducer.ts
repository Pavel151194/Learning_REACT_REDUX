import { ActionType, createReducer } from "typesafe-actions"
import { setRegistrationEmailAction, setRegistrationUsernameAction, setRegistrationPasswordAction, setRegistrationConfirmPasswordAction, sendRegistrationDataErrorAction, sendRegistrationDataSuccessAction } from "../actions"

export interface IRegistrationState {
  userName: string
  email: string
  password: string
  confirmPassword: string
  
  error: string | null
  isSuccess: boolean
}

const defaultState: IRegistrationState = {
  email: "",
  userName: "",
  password: "",
  confirmPassword: "",

  error: null,
  isSuccess: false
}

const actions = {
  setRegistrationEmailAction,
  setRegistrationUsernameAction,
  setRegistrationPasswordAction,
  setRegistrationConfirmPasswordAction,

  sendRegistrationDataErrorAction,
  sendRegistrationDataSuccessAction
}

export const registrationReducer = createReducer<IRegistrationState, ActionType <typeof actions> >(defaultState)
  .handleAction(setRegistrationEmailAction, (state, { payload: email }) => ({ ...state, email }) )
  .handleAction(setRegistrationUsernameAction, (state, { payload: userName }) => ({ ...state, userName }) )
  .handleAction(setRegistrationPasswordAction, (state, { payload: password }) => ({ ...state, password }) )
  .handleAction(setRegistrationConfirmPasswordAction, (state, { payload: confirmPassword }) => ({ ...state, confirmPassword }) )

  .handleAction(sendRegistrationDataErrorAction, (state, { payload: error }) => ({ ...state, error }) )
  .handleAction(sendRegistrationDataSuccessAction, (state, { payload: isSuccess }) => ({ ...state, isSuccess }) )