import * as React from "react"
import { memo } from "react"
import { FooterSvg } from "../../../assets/svgs"
import "./FormFooter.css"

export const FormFooter = memo( () => (
    <footer className="form_footer">
        <FooterSvg className={"form_footer_svg"}/>
    </footer>
) )