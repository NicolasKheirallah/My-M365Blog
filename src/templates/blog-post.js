import React from "react"
import {Link, graphql} from "gatsby"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"

const BlogPostTemplate = ({data, location}) => {
    const post = data.mdx
    const siteTitle = data.site.siteMetadata
        ?.title || `Title`
    const {previous, next} = data

    return (
        <Layout location={location} title={siteTitle}>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}/>
            <div class="flex">
                <article class="blog-post pr-20 pl-20 pb-20 text-l">
                    <header class="text-center">
                        <h1 class="text-4xl dark:text-gray-200 pb-2" itemProp="headline">{post.frontmatter.title}</h1>
                        <p class="dark:text-gray-200 pb-10">{post.frontmatter.date}</p>
                    </header>
                    <MDXRenderer>{post.body}</MDXRenderer>
                    <hr/>
                </article>
            </div>
            <div>
                <nav class="">
                    <ul class="flex justify-between">
                        <li class="pl-12">
                            {previous && (
                                <Link to={previous.fields.slug} rel="prev">
                                    ← {previous.frontmatter.title}
                                </Link>
                            )}
                        </li>
                        <li class="pr-12">
                            {next && (
                                <Link to={next.fields.slug} rel="next">
                                    {next.frontmatter.title}
                                    →
                                </Link>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </Layout>
    )
}

export default BlogPostTemplate

export const pageQuery = graphql `
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
