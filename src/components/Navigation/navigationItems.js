import * as React from "react";

const NavigationItems = (props) => {

    return (
        <a class="mr-5 hover:text-gray-900 dark:hover:text-gray-600" href={props.url}>{props.title}</a>

    )
}
export default NavigationItems