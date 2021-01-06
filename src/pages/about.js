import React from "react"
import {graphql} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/social/social"

const AboutMe = ({data, location}) => {
    const siteTitle = data.site.siteMetadata.title

    return (
        <Layout location={location} title={siteTitle}>
            <SEO title="About Me"/>
            <div class="flex justify-center p-20 mx-auto">
                <div class="container inline-flex w-full rounded-lg shadow-2xl bg-gray-50">
                    <div class="flex justify-start w-1/2 shrink-0">
                        <img
                            class="rounded-tl-md rounded-bl-md object-cover w-full"
                            src="https://cdn.pixabay.com/photo/2020/12/29/22/22/doctor-5871743_960_720.jpg"></img>
                    </div>
                    <div class="w-1/2 p-10  text-center sm:text-left dark:text-gray-900">
                        <p class="text-4xl text-center pb-5">Wanna get to know me?</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a mauris
                            eleifend, ultrices nulla cursus, rutrum nisi. Donec semper quam nunc.
                            Suspendisse congue felis nibh, facilisis convallis arcu ultricies eget. Aliquam
                            erat volutpat. Maecenas placerat dui varius nibh iaculis aliquet. In a nulla
                            aliquam tellus condimentum consequat. Donec neque mauris, dignissim ac vehicula
                            vitae, faucibus eu nulla. Suspendisse sapien massa, pharetra in dictum at,
                            sollicitudin id enim. Nunc porttitor velit sollicitudin venenatis finibus. Ut
                            eleifend bibendum vehicula. Nam suscipit vel risus id semper.
                        </p>
                    </div>
                    <div class="relative ...">
                        <div class="absolute bottom-0 right-0 p-10">
                            <Social/>

                        </div>
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
