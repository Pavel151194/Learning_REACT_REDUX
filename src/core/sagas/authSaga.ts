import { call, put, takeEvery } from "redux-saga/effects"
import { Action } from "redux-actions"
import { IUserAuth } from "../../types/user"
import { sendRegistrationDataErrorAction, setRegistrationUsernameAction } from "../actions/registrationActions"
import { ACTIONS } from "../actions/constants"

function* sendRegistrationSaga({ payload: { username, password, email } }: Action<IUserAuth>) {
    try {
        console.log("registrationData:", { username, password, email })
    





        yield put(setRegistrationUsernameAction(""))



        
    } catch (e) {
        yield put(sendRegistrationDataErrorAction({ e }))
    }
}

export function* authSaga() {
    yield takeEvery(ACTIONS.SEND_REGISTRATION_DATA, sendRegistrationSaga)
}

