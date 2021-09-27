import { ActionType, createReducer } from "typesafe-actions"
import { setNewPasswordPasswordAction, setNewPasswordConfirmPasswordAction } from "../actions"

export interface INewPasswordState {
  newPassword: string
  confirmPassword: string
}

const defaultState: INewPasswordState = {
  newPassword: "",
  confirmPassword: ""
}

const actions = {
  setNewPasswordPasswordAction,
  setNewPasswordConfirmPasswordAction,
}

export const newPasswordReducer = createReducer<INewPasswordState, ActionType <typeof actions> >(defaultState)
  .handleAction(setNewPasswordPasswordAction, (state, { payload: newPassword }) => ({ ...state, newPassword }) )
  .handleAction(setNewPasswordConfirmPasswordAction, (state, { payload: confirmPassword }) => ({ ...state, confirmPassword }) )