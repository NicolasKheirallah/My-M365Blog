import React from "react"
import Social from "../social/social"

const Footer = () => {

    return (
        <footer class="text-gray-600 body-font">
            <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <div
                    class="flex title-font font-medium items-center md:justify-start justify-center text-gray-600 dark:text-gray-200">
                    <span class="ml-3 text-xl">Your Modern Workplace</span>
                </div>
                <p
                    class="text-sm text-gray-500 dark:text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Nicolas Kheirallah</p>
                <Social/>
            </div>
        </footer>
    )
}
export default Footer