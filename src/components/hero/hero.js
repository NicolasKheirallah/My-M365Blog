import * as React from "react";

const Hero = (props) => {

    return (
        <div class="relative bg-white dark:bg-gray-800 dark:text-gray-200 overflow-hidden">
            <div class="max-w-7xl mx-auto">
                <div
                    class="relative z-10 pb-8 bg-white dark:bg-gray-800 dark:text-gray-200 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg
                        class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true">
                        <polygon class="bg-white dark:bg-gray-800" points="50,0 100,0 50,100 0,100"/>
                    </svg>
                    <div class="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
                    <div
                        class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"></div>

                    <main
                        class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 ">
                        <div class="sm:text-center lg:text-left">
                            <h1
                                class="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-gray-200  sm:text-5xl md:text-6xl">
                                <span class="block xl:inline">Welcome to my M365 blog
                                </span>
                            </h1>
                            <p
                                class="mt-3 text-base text-gray-500 dark:text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                                commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                            </p>
                            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"></div>
                        </div>
                    </main>
                </div>
            </div>
            <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="https://images.pexels.com/photos/4916238/pexels-photo-4916238.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    alt=""/>
            </div>
        </div>
    )
}
export default Hero