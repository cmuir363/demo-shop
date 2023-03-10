import React from "react"
import NavBar from "./NavBar/NavBar"
import { Outlet } from "react-router-dom"


export interface LayoutProps {}

const Layout = (props: LayoutProps) => {
    return (
    <>
        <NavBar />
        <Outlet />
    </>)
}

export default Layout