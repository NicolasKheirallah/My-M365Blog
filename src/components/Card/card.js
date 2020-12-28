import * as React from "react";
import Tags from "./tags"
import Author from "./author"
const Card = ({
    title,
    href,
    date,
    author,
    description,
    tags
}) => {
    return (
        <a class="mx-auto px-4 py-8 max-w-xl my-20" href={href}>
            <div class="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
                <div class="md:flex-shrink-0">
                    <img
                        src="https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg"
                        alt="mountains"
                        class="w-full h-64 rounded-lg rounded-b-none"/>
                </div>
                <div class="px-4 py-2 mt-2">
                    <p class="font-light text-gray-600 text-xs text-right">{date}</p>
                    <div>
                        <h2 class="font-bold text-2xl text-gray-800 tracking-normal">{title}.</h2>
                        {/* <span class="text-sm text-gray-700 px-2 mr-1">
                            {description}
                        </span> */}
                        <div class="flex justify-between">
                            <Author author={author}/>
                            <Tags tags={tags}/>
                        </div>
                    </div>

                </div>
            </div>

        </a>
    )
}
export default Card