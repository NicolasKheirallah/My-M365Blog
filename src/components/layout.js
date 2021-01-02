import React from "react"
import NavigationBar from "./navigation/navigationBar"
import Footer from "./footer/footer"
import {ThemeProvider} from './navigation/themeContext'
const Layout = ({location, title, children}) => {

    return (
        <ThemeProvider>
            <div class="bg-white dark:bg-gray-800 dark:text-white bg-opacity-100">
                <NavigationBar/>
                <div>{children}</div>
                <Footer></Footer>
            </div>
        </ThemeProvider>
    )
}

export default Layout
