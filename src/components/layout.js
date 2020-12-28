import React from "react"
import NavigationBar from "./Navigation/navigationBar"

const Layout = ({location, title, children}) => {
    const rootPath = `${__PATH_PREFIX__}/`
    const isRootPath = location.pathname === rootPath

    return (
        <div class="bg-white bg-opacity-100">
            <NavigationBar/>
                <div>{children}</div>
            </div>
    )
}

export default Layout
