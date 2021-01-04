import * as React from "react";

const NavigationItems = (props) => {

    return (
        <a
            class="w-auto mr-5 hover:text-green-500 dark:hover:text-gray-600"
            href={props.url}>{props.title}</a>
    )
}
export default NavigationItems