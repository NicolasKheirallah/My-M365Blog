import * as React from "react"
import NavigationBranding from "./navigationBranding"
import NavigationItems from "./navigationItems"
import NavigationSearchBar from "./navigationSearchBar"
import Toggle from "./toggle"

const NavigationBar = () => {
  return (
    <nav class="flex flex-wrap items-center py-4 sm:px-10 border-grey-700 ml-3">
      <NavigationBranding title="Your Digital Workplace" />
      <div class="mx-auto sm:mr-auto sm:py-1 sm:pl-4 md:border-l md:border-gray-700 justify-center flex flex-nowrap sm:ml-2">
        <div class="items-center items-start">
          <nav class="flex flex-wrap justify-center">
            <NavigationItems title="Blog" url="/posts/" />
            <NavigationItems title="Tags" url="/tags/" />
            <NavigationItems title="Contact" url="/contact/" />
            <NavigationItems title="About" url="/about/" />
          </nav>
        </div>
      </div>
      <div class="flex flex-wrap items-center justify-center">
        <div class="sm:ml-3">
          <NavigationSearchBar />
        </div>
        <div class="ml-3 md:ml-3">
          <Toggle />
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
