import * as React from "react";
import Author from "./author"
const Card = ({
    title,
    href,
    date,
    author,
    description,
    Category
}) => {
    return (
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-12">
              <div class="p-12 flex flex-col items-start">
                <span class="inline-block py-1 px-2 rounded bg-gray-50 dark:bg-gray-750 text-gray-500 dark:text-gray-200 text-xs font-medium tracking-widest">{Category}</span>
                <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 dark:text-gray-200 mt-4 mb-4">{title}</h2>
                <p class="leading-relaxed mb-8 dark:text-gray-200">{description}.</p>
                <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
                  <a class="text-gray-500  dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-600 inline-flex items-center">Read
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
                <Author author={author}></Author>
              </div>
            </div>
          </div>
        </section>
    )
}
export default Card