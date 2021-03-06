import React, { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNewPasswordPasswordAction, setNewPasswordConfirmPasswordAction } from "../../../core/actions"
import { getNewPasswordSelector } from "../../../core/selectors"
import { validatePassword, validateConfirmPassword } from "../../../helpers"
import { FormInput, FormButton, FormHeadText } from "../../atoms"
import "./NewPasswordForm.css"

interface INewPasswordForm {
    onClickFormButton: () => void
}

export const NewPasswordForm = memo( ({ onClickFormButton }: INewPasswordForm) => {
    //const history = useHistory()
    const dispatch = useDispatch()
    const { newPassword, confirmPassword } = useSelector(getNewPasswordSelector)
    const isValidNewPassword = validatePassword(newPassword)
    const isValidConfirmPassword = validateConfirmPassword(newPassword, confirmPassword)

    return (
        <main className="form">
            <FormHeadText content={"Please enter new password"}/>
            <FormInput
                inputTitle="New password"
                inputType="password"
                value={newPassword}
                isValid={isValidNewPassword}
                onChange={(value: string) => dispatch(setNewPasswordPasswordAction(value.trim()))}
                autoFocus={true}
            />
            <FormInput
                inputTitle="Confirm password"
                inputType="password"
                value={confirmPassword}
                isValid={isValidConfirmPassword}
                onChange={(value: string) => dispatch(setNewPasswordConfirmPasswordAction(value.trim()))}
            />
            <FormButton
                buttonName="Set password"
                isDisabled={!newPassword || !confirmPassword}
                onClick={onClickFormButton}
            />
        </main>
    )
})