import * as React from "react";

const NavigationSearchBar = (props) => {

    return (
        <div class="relative mx-auto text-gray-600 lg:block hidden">
        <input
            class="border-2 border-gray-600 bg-white h-10 pl-2 rounded-lg text-sm focus:outline-none mr-3"
            type="search"
            name="search"
            placeholder="Search"/>
    </div>
    )
}
export default NavigationSearchBar