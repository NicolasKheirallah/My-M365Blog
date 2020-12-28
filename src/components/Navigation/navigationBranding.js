import * as React from "react";

const NavigationBranding = (props) => {

    return (
        <div class="flex items-center flex-shrink-0 text-gray-600 dark:text-gray-200 mr-16">
            <a class="font-semibold text-xl tracking-tight" href="/">{props.title}</a>
        </div>
    )
}
export default NavigationBranding