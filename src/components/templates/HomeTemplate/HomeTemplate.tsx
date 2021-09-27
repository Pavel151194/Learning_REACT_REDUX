import React, { memo } from "react"
import { Header } from '../../molecules'
import "./HomeTemplate.css"

interface IHomeTemplate {
    homeTitle: React.ReactNode
    homeMain: React.ReactNode
}

export const HomeTemplate = memo( ({ homeTitle, homeMain }: IHomeTemplate) => (
    <div className="wrapper home_template">
        <Header/>
        {homeTitle}
        {homeMain}
    </div>
))