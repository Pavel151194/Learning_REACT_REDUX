import React, { useState, useEffect } from 'react'
import { Link} from "react-router-dom"
import { HomeTemplate } from '../components/templates/HomeTemplate/HomeTemplate'
import { Header } from '../components/molecules/Header'
import { FormButton } from '../components/atoms/FormButton'

export const HomePage = () => {
    
    return(
        <HomeTemplate
            homeHeader={<Header/>}
            homeTitle={
                <h1>Make your Blog
                    <Link style={{color: "#007BFF"}} to="login"> Online</Link>
                </h1>
            }
            homeMain={
                <main className="home_main">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero dolorum ea nostrum cum similique eligendi aliquam unde, maxime delectus amet dolor reiciendis omnis impedit dolorem excepturi ex distinctio, incidunt quod?</p>
                    <FormButton buttonName={"Learn More"}/>
                </main>
            }
        />
    )
}