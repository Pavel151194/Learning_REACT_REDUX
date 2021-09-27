import { ActionType, createReducer } from "typesafe-actions"
import { setResetPasswordEmailAction } from "../actions"

export interface IResetPasswordState {
  email: string
}

const defaultState: IResetPasswordState = {
  email: "",
}

const actions = {
  setResetPasswordEmailAction
}

export const resetPasswordReducer = createReducer<IResetPasswordState, ActionType <typeof actions> >(defaultState)
  .handleAction(setResetPasswordEmailAction, (state, { payload: email }) => ({ ...state, email }) )