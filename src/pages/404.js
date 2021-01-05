import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="404: Not Found"/>
            <div class="gradient text-gray-600 dark:text-white min-h-screen flex items-center">
                <div class="container mx-auto p-4 flex flex-wrap items-center">
                    <div class="w-full md:w-6/12 md:text-left p-4">
                        <div class="text-6xl font-medium">404</div>
                        <div class="text-4xl md:text-4xl font-medium mb-4">
                            Oops. Someone has stolen this page
                        </div>
                        <div class="text-lg mb-8">
                        Try navigating back to find what you are looking for
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default NotFoundPage

export const pageQuery = graphql `
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
