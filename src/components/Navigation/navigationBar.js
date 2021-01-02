import * as React from "react";
import NavigationBranding from "./navigationBranding"
import NavigationItems from "./navigationItems"
import NavigationSearchBar from "./navigationSearchBar"
import Toggle from "./toggle"

const NavigationBar = () => {
    return (
        <nav
            class="flex items-center justify-between flex-wrap py-4 md:px-12  border-t-2 border-grey-700">
            <NavigationBranding title="Your Digital Workplace"/>
            <div
                class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                <div
                    class="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start flex flex-col md:h-auto">
                                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <NavigationItems title="Blog" url="/posts/"/>
                    <NavigationItems title="Contact" url="/contact/"/>
                    <NavigationItems title="About" url="/about/"/>
                    </nav>
                </div>
            </div>
            <div class="sm:ml-auto flex flex-wrap items-center text-base justify-center">
                <NavigationSearchBar/>
                <Toggle/>
            </div>
        </nav>
    )
}

export default NavigationBar