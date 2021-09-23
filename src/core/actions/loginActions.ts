import { createAction } from "typesafe-actions"
import { ACTIONS } from "./constants"

export const setLoginEmailAction = createAction(ACTIONS.SET_LOGIN_FORM_EMAIL)<string>()
export const setLoginPasswordAction = createAction(ACTIONS.SET_LOGIN_FORM_PASSWORD)<string>()