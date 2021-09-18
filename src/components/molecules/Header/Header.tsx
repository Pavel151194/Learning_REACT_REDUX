import React, { useCallback, useEffect } from "react"
import { Link } from "react-router-dom"
import { HeaderBurger } from "../../atoms/HeaderBurger"
import { useDispatch, useSelector } from "react-redux"
import { setIsOpenHeader } from "../../../core"
import { getAppState } from "../../../core/selectors/appSelectors"


import "./Header.css"

export const Header = () => {
    const { isOpenHeader } = useSelector(getAppState);
    console.log({ isOpenHeader })

    const dispatch = useDispatch()

    const toggleMenu = useCallback(() => {
        dispatch(setIsOpenHeader(!isOpenHeader))
    }, [dispatch, isOpenHeader])

    useEffect(() => {
        return () => {
        dispatch(setIsOpenHeader(false))
        };
    }, [dispatch])


    return (
        <header className="form_header">
            <HeaderBurger onClick={toggleMenu}/>
            {isOpenHeader && (
                <nav>
                    <ul className={"menu"}>
                        <li>
                            <Link className={"app"} to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users/:id">User</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    )
}