import * as React from "react";

const NavigationItems = (props) => {

    return (
        <div
            class="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
            <div class="text-md font-bold text-blue-700 lg:flex-grow">
            <a
                        href={props.url}
                        class="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-500 items-center justify-center hover:text-white">
                        <span>{props.title}</span>
                    </a>
            </div>
        </div>

    )
}
export default NavigationItems