import React from 'react'
import "./HomeTemplate.css"

interface IHomeTemplate {
    homeHeader: React.ReactNode
    homeTitle: React.ReactNode
    homeMain: React.ReactNode
}

export const HomeTemplate = ({ homeHeader, homeTitle, homeMain }: IHomeTemplate) => (
    <div className="wrapper home_template">
        {homeHeader}
        {homeTitle}
        {homeMain}
    </div>
)