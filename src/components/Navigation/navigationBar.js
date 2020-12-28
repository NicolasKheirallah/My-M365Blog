import * as React from "react";
import NavigationBranding from "./navigationBranding"
import NavigationItems from "./navigationItems"
import NavigationSearchBar from "./navigationSearchBar"
import Toggle from "./toggle"

const NavigationBar = () => {
    return (
        <nav
            class="flex items-center justify-between flex-wrap py-4 lg:px-12  border-t-2 border-grey-700">
            <NavigationBranding title="Your Digital Workplace"/>
            <div
                class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                <div
                    class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
                    <NavigationItems title="Blog" url="/posts/"/>
                    <NavigationItems title="Contact me" url="/contact/"/>
                    <NavigationItems title="About me" url="/about/"/>
                </div>
            </div>
            <div class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
                <NavigationSearchBar/>
                <Toggle/>
            </div>
        </nav>
    )
}

export default NavigationBar