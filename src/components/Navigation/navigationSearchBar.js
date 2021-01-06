import * as React from "react";

const NavigationSearchBar = (props) => {

    return (
            <input
                type="search"
                id="search-field"
                name="Search-field"
                placeholder="Search"
                class="dark:bg-gray-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:shadow-lg text-base outline-none text-gray-100 py-1 px-3 transition-colors duration-200 ease-in-out"/>
    )
}
export default NavigationSearchBar