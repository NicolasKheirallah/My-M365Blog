import * as React from "react";

const Author = ({author}) => {

    return(
        <div class="author flex items-center -ml-3 my-3 justify-around">
        <div class='flex flex-row  items-center mt-4 px-4'>
            <div class="flex user-logo justify-around ">
                <img
                    class="w-12 h-12 object-cover rounded-full mx-4 shadow"
                    src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                    alt="avatar"/>
            </div>
            <div class='flex flex-row'>
            <h2 class=" text-sm tracking-tighter text-gray-900">
                <a href="#">Nicolas Kheirallah {author}</a>
            </h2>
            </div>
        </div>
    </div>
    )
}
export default Author