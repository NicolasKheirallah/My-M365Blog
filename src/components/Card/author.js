import * as React from "react";

const Author = ({author}) => {

    return (
        <div class="flex items-center">
            <img
                alt="blog"
                src="https://dummyimage.com/104x104"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
                <span class="pl-3 title-font font-medium text-gray-900 dark:text-gray-200">
                    Nicolas {author}</span>
        </div>
    )
}
export default Author