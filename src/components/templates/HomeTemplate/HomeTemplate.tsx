import React from 'react'
import { Header } from '../../molecules/Header'
import "./HomeTemplate.css"

interface IHomeTemplate {
    homeTitle: React.ReactNode
    homeMain: React.ReactNode
}

export const HomeTemplate = ({ homeTitle, homeMain }: IHomeTemplate) => (
    <div className="wrapper home_template">
        <Header/>
        {homeTitle}
        {homeMain}
    </div>
)