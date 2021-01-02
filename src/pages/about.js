import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="About Me"/>
        </Layout>
    )
}

export default AboutMe

export const pageQuery = graphql `
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
