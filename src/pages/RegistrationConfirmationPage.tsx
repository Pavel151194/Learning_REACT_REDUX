import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { SignFormTemplate } from '../components/templates'
import { FormTitle, FormButton } from '../components/atoms'
import { AuthService } from "../services/AuthService"
import { sendRegistrationConfirmation } from '../core'


export const RegistrationConfirmationPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const params = useParams() as any


    useEffect(()=> {
        if(params?.token && params?.uid) dispatch(sendRegistrationConfirmation(params))
    }, [dispatch, params, params?.token, params?.uid])

    const email = "email"

    console.log({ params })

    return (
        <SignFormTemplate
            formTitle={<FormTitle content={"Registration Confirmation"}/>}
            formMain={
                <main className="sign_form_template_main">
                    <p>
                        Please activate your account with the activation link in the email
                        <span> {email} </span>
                        Please, check your email
                    </p>
                    <FormButton
                        isDisabled={false}
                        onClick={() => history.push("/")}
                        buttonName={"Home"}
                    />
                </main>
            }
        />
    )
}