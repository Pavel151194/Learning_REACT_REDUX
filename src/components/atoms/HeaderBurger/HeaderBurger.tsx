import * as React from "react"
import { memo } from "react"
import { HeaderBurgerSvg } from "../../../assets/svgs"
import "./HeaderBurger.css"

interface IHeaderBurger {

    onClick: () => void
}

export const HeaderBurger = memo( ( { onClick }: IHeaderBurger) => (
    <button className="header_burger" onClick={onClick}><HeaderBurgerSvg className="header_burger_svg"/></button>
) )