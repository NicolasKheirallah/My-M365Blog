import React from "react"
import {graphql} from "gatsby"
import profileImage from '../../content/assets/profile-pic.jpg'

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="About Me"/>
            <div class="flex justify-center p-20 mx-auto">
                <div class="container inline-flex w-full rounded-lg shadow-2xl bg-gray-50">
                    <div class="flex justify-start w-2/5 shrink-0">
                        <img
                            class="rounded-tl-md rounded-bl-md object-cover w-full"
                            alt="oldimg"
                            src={profileImage}></img>
                    </div>
                    <div class="w-3/5 p-10  text-center sm:text-left dark:text-gray-900">
                        <p class="text-4xl text-center pb-5">Wanna get to know me?</p>
                        <p>Hi!
                          My name is Nicolas and I live in one of the most awesome cities in the world: Gothenburg, Sweden. 
                          I'm currently working as a Consultant at CGI with focus on M365 and Digital workplace. I do everything from development and solution architect
                          to project mangement etc. :) 
                          If you have questions just hit me up :)
                        </p>
                    </div>
                </div>
            </div>
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
