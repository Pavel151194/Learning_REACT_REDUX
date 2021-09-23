import { ActionType, createReducer } from "typesafe-actions"
import { setLoginEmailAction, setLoginPasswordAction } from "../actions"

export interface ILoginState {
  email: string
  password: string
}

const defaultState: ILoginState = {
  email: "",
  password: ""
}

const actions = {
  setLoginEmailAction,
  setLoginPasswordAction,
}

export const loginReducer = createReducer<ILoginState, ActionType <typeof actions> >(defaultState)
  .handleAction(setLoginEmailAction, (state, { payload: email }) => ({ ...state, email }) )
  .handleAction(setLoginPasswordAction, (state, { payload: password }) => ({ ...state, password }) )