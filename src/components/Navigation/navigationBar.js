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
            <button
                class="inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
                data-target="#navigation">
                <i class="material-icons">menu</i>
            </button>
            <div
                class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
                <div
                    class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
                    <NavigationSearchBar/>
                    <NavigationItems title="Blog" url="/posts/"/>
                    <NavigationItems title="Contact me" url="/contact/"/>
                    <NavigationItems title="About me" url="/about/"/>
                    <Toggle/>
                </div>
            </div>
        </nav>
    )
}

export default NavigationBar