import { createAction } from "typesafe-actions"
import { ACTIONS } from "./constants"
import { IActivationPayload, IUserAuth } from "../../../src/types/user"

export const setRegistrationEmailAction = createAction(ACTIONS.SET_REGISTRATION_FORM_EMAIL)<string>()
export const setRegistrationUsernameAction = createAction(ACTIONS.SET_REGISTRATION_FORM_USERNAME)<string>()
export const setRegistrationPasswordAction = createAction(ACTIONS.SET_REGISTRATION_FORM_PASSWORD)<string>()
export const setRegistrationConfirmPasswordAction = createAction(ACTIONS.SET_REGISTRATION_FORM_CONFIRM_PASSWORD)<string>()

export const sendRegistrationDataAction = createAction(ACTIONS.SEND_REGISTRATION_DATA)<IUserAuth>()
export const sendRegistrationDataErrorAction = createAction(ACTIONS.SEND_REGISTRATION_DATA_ERROR)<string  |null>()
export const sendRegistrationDataSuccessAction = createAction(ACTIONS.SEND_REGISTRATION_DATA_SUCCESS)<boolean>()

export const sendRegistrationConfirmation = createAction(ACTIONS.SEND_REGISTRATION_CONFIRMATION)<IActivationPayload>()