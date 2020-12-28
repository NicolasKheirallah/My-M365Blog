import * as React from "react";

const NavigationSearchBar = (props) => {

    return (
        <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
            <input
                type="search"
                id="search-field"
                name="Search-field"
                placeholder="Search"
                class="w-full dark:bg-gray-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:ring-gray-900 focus:bg-transparent focus:border-gray-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
    )
}
export default NavigationSearchBar