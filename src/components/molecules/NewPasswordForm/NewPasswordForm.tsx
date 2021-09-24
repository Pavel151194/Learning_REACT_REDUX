import * as React from "react"
import { memo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setNewPasswordPasswordAction, setNewPasswordConfirmPasswordAction } from "../../../core"
import { getNewPasswordSelector } from "../../../core/selectors/newPasswordSelector"
import { validatePassword, validateConfirmPassword } from "../../../helpers"
import { FormInput } from "../../atoms/FormInput"
import { FormButton } from "../../atoms/FormButton"
import { FormHeadText } from "../../atoms/FormHeadText"
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