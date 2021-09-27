import { createAction } from "typesafe-actions"
import { ACTIONS } from "./constants"

export const setNewPasswordPasswordAction = createAction(ACTIONS.SET_NEW_PASSWORD_FORM_PASSWORD)<string>()
export const setNewPasswordConfirmPasswordAction = createAction(ACTIONS.SET_NEW_PASSWORD_FORM_CONFIRM_PASSWORD)<string>()