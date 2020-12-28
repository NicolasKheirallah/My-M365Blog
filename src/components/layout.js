import React from "react"
import NavigationBar from "./Navigation/navigationBar"
import Footer from "./footer/Footer"

const Layout = ({location, title, children}) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath

    return (
        <div class="bg-white dark:bg-black dark:text-white bg-opacity-100">
            <NavigationBar/>
                <div>{children}</div>
                <Footer></Footer>
            </div>
    )
}

export default Layout
