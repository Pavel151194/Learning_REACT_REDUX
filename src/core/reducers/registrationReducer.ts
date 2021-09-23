import { ActionType, createReducer } from "typesafe-actions"
import { setRegistrationEmailAction, setRegistrationUsernameAction, setRegistrationPasswordAction, setRegistrationConfirmPasswordAction } from "../actions"

export interface IRegistrationState {
  userName: string
  email: string
  password: string
  confirmPassword: string
}

const defaultState: IRegistrationState = {
  email: "",
  userName: "",
  password: "",
  confirmPassword: ""
}

const actions = {
  setRegistrationEmailAction,
  setRegistrationUsernameAction,
  setRegistrationPasswordAction,
  setRegistrationConfirmPasswordAction
}

export const registrationReducer = createReducer<IRegistrationState, ActionType <typeof actions> >(defaultState)
  .handleAction(setRegistrationEmailAction, (state, { payload: email }) => ({ ...state, email }) )
  .handleAction(setRegistrationUsernameAction, (state, { payload: userName }) => ({ ...state, userName }) )
  .handleAction(setRegistrationPasswordAction, (state, { payload: password }) => ({ ...state, password }) )
  .handleAction(setRegistrationConfirmPasswordAction, (state, { payload: confirmPassword }) => ({ ...state, confirmPassword }) )