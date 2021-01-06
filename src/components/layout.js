import React from "react"
import NavigationBar from "./navigation/navigationBar"
import Footer from "./footer/footer"
import {ThemeProvider} from './navigation/themeContext'
const Layout = ({children}) => {

    return (
        <ThemeProvider>
            <div
                class="flex flex-col bg-white dark:bg-gray-800 dark:text-white bg-opacity-100 min-h-screen">
                <NavigationBar/>
                <div>{children}</div>
            </div>
            <div class="bottom-0 bg-white dark:bg-gray-800 dark:text-white bg-opacity-100 ">
                <Footer class="bottom-0"></Footer>
            </div>
        </ThemeProvider>
    )
}

export default Layout
