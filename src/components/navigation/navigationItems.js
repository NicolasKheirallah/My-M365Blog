import * as React from "react";

const NavigationItems = (props) => {

    return (
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-900 dark:hover:text-gray-600" href={props.url}>{props.title}</a>
      </nav>

    )
}
export default NavigationItems