import * as React from "react";
import Author from "./author"
const Card = ({
    title,
    href,
    date,
    author,
    description,
    category
}) => {
    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-12">
                    <div class="p-12 flex flex-col items-start w-full lg:w-full">
                        <span
                            class="inline-block py-1 px-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-medium tracking-widest">{category}</span>
                        <h2
                            class="md:w-auto md:text-l text-2xl title-font font-medium text-gray-900 dark:text-gray-200 mt-4 mb-4">{title}</h2>
                        <div class="h-8 overflow-hidden">
                            <p class="leading-relaxed mb-4 dark:text-gray-200">{description}.</p>
                        </div>
                        <div
                            class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                            <a
                                class="text-gray-500  dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-600 inline-flex items-center" href={href}>Read
                                <svg
                                    class="w-4 h-4 ml-2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                        <Author author={author}></Author>
                        <div class="w-full">
                            <p class="text-xs text-gray-500 text-right">
                                {date}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Card