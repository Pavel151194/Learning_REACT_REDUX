import * as React from "react"
import { memo } from "react"
import { Link} from "react-router-dom"
import "./FormTitleLinks.css"

interface IFormTitleLinks {
    isLoginPage?: boolean
    isRegistrationPage?: boolean
}

export const FormTitleLinks = memo( ({ isLoginPage, isRegistrationPage }: IFormTitleLinks) => (
    <h2 className="form_title_links">
        <Link to="login" style={isLoginPage? {color: "#007BFF"} : {color: "#75869B"}}>Login</Link>
        <div className="vertical_line" ></div>
        <Link to="registration" style={isRegistrationPage? {color: "#007BFF"} : {color: "#75869B"}}>Registration</Link>
    </h2>
) )

//style={isLoginPage?{ color: "#007BFF"}:{ color: "#75869B"}}