import { createAction } from "typesafe-actions"
import { ACTIONS } from "./constants"

export const setResetPasswordEmailAction = createAction(ACTIONS.SET_RESET_PASSWORD_FORM_EMAIL)<string>()