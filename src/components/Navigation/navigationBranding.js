import * as React from "react";

const NavigationBranding = (props) => {

    return (
        <div class="flex items-center flex-shrink-0 text-gray-600 mr-16">
            <span class="font-semibold text-xl tracking-tight" href="/">{props.title}</span>
        </div>
    )
}
export default NavigationBranding