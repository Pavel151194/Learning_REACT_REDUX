import { call, put, takeEvery, select } from "redux-saga/effects"
import { Action } from "redux-actions"
import { IUserAuth, IActivationPayload } from "../../types/user"
import { sendRegistrationDataErrorAction, setRegistrationUsernameAction } from "../actions/registrationActions"
import { ACTIONS } from "../actions/constants"
import { getRegistrationSelector, IRegistrationState } from ".."
import { AuthService } from "../../services/AuthService"

function* sendRegistrationSaga({ payload: { username, password, email } }: Action<IUserAuth>) {
    try {
        //console.log({ username, password, email })
        yield put(sendRegistrationDataErrorAction(null))
        yield call( () =>
            AuthService.registration({
                username,
                password,
                email
            })
        )
    }
    catch (e: any) {
        const error = Object.keys(e.response.data).reduce( (acc: string, field: string) => {
            const value = e.response.data[field]
            return acc + value.join(" ")
        }, "")
        //console.log({ e })
        yield put(sendRegistrationDataErrorAction(error))
    }
}

function* confirmationRegistrationSaga({ payload: { token, uid }, }: Action<IActivationPayload>){
    try {
        yield call( () => AuthService.activateUser({ token, uid }) )
    }
    catch (e: any) {

    
    }
}

export function* authSaga() {
    yield takeEvery(ACTIONS.SEND_REGISTRATION_DATA, sendRegistrationSaga)
    yield takeEvery(ACTIONS.SEND_REGISTRATION_CONFIRMATION, confirmationRegistrationSaga)
}

