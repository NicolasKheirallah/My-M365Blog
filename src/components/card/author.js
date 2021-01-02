import * as React from "react";

const Author = ({author}) => {

    return (
        <div class="inline-flex items-center">
            <img
                alt="blog"
                src="https://dummyimage.com/104x104"
                class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span class="flex-grow flex flex-col pl-4">
                <span class="title-font font-medium text-gray-900 dark:text-gray-200">
                    Nicolas {author}</span>
            </span>
        </div>
    )
}
export default Author