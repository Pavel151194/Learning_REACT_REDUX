import { ActionType, createReducer } from "typesafe-actions"
import { setIsOpenHeader } from "../actions"

export interface IMenuState {
  isOpenHeader: boolean
}

const defaultState: IMenuState = {
  isOpenHeader: false
}

const actions = {
  setIsOpenHeader
}

export const appReducer = createReducer<IMenuState, ActionType <typeof actions> >(defaultState)
  .handleAction(setIsOpenHeader, (state, { payload: isOpenHeader }) => ({ ...state, isOpenHeader}) )