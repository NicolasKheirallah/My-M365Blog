import * as React from "react";

const Tags = ({tags}) => {

    return (
        <div class="author flex items-center -ml-3 my-3 justify-around">
            <div class='flex flex-row-reverse justify-between items-center mt-4 flex-auto'>
                <span
                    class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#test</span>
                <span
                    class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">#test</span>

                <span
                    class="m-1 bg-gray-200 hover:bg-gray-300 rounded-full px-2 font-bold text-sm leading-loose cursor-pointer">{tags}</span>
            </div>
        </div>
    )
}
export default Tags