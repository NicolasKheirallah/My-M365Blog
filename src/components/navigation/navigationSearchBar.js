import * as React from "react";

const NavigationSearchBar = (props) => {

    return (
        <div class="pt-2 relative mx-auto text-gray-600">
            <input
                class="border-2 border-gray-300 bg-white dark:bg-black dark:text-white h-10 px-5 pr-16 rounded-lg text-sm mr-3"
                type="search"
                name="search"
                placeholder="Search"></input>
        </div>
    )
}
export default NavigationSearchBar