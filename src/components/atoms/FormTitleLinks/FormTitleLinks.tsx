import * as React from "react"
import { memo } from "react"
import { Link} from "react-router-dom"
import "./FormTitleLinks.css"

export const FormTitleLinks = memo( () => (
    <h2 className="form_title_links">
        <Link to="login">Login</Link>
        <div className="vertical_line" ></div>
        <Link to="registration">Registration</Link>
    </h2>
) )