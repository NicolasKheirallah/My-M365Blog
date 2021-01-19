import React, {useState} from "react";
import {graphql} from "gatsby"
import Layout from "../components/layout";
import Card from "../components/card/card";
import SEO from "../components/seo"

const Tags = props => {
    const {data} = props
    const allPosts = data.allMdx.edges
    const [state,
        setState] = useState({filteredData: "", items: data.allMdx.edges})

    const getCategories = items => {
        const categoryItems = items.map(item => {
            return item.node.frontmatter.category
        })
        const uniqueCategories = new Set(categoryItems)
        const categories = Array.from(uniqueCategories)
        return categories
    }
    const handleInputChange = event => {
        const query = event.target.textContent
        console.log(query);
        const {data} = props
        const posts = data.allMdx.edges || []
        const filteredData = posts.filter(post => {
            const {category} = post.node.frontmatter
            return (category.toLowerCase().includes(query.toLowerCase()))
        })
        setState({query, filteredData})
    }

    const {filteredData} = state
    const hasSearchResults = filteredData
    const posts = hasSearchResults
        ? filteredData
        : allPosts
    const categories = getCategories(props.data.allMdx.edges)
    console.log(posts);

    return (
        <Layout>
            <SEO title="Tags"/>
            <section class="bg-indigo-dark p-8">
                <div class="container mx-auto py-8">
                    {categories.map((category, index) => {
                        return (
                            <div class="inline-flex p-2">
                                <button
                                    type="button"
                                    key={index}
                                    class="dark:text-white  py-2 px-4 border dark:border-gray-500 rounded border-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700"
                                    onClick={handleInputChange}>
                                    {category}
                                </button>
                            </div>
                        )
                    })}
                </div>
            </section>
            <section class="bg-indigo-dark p-8">
                <div class="container flex my-6 mx-auto ">
                    <div class="my-1 px-1 w-full grid grid-cols-4">

                        {posts.map(({node}) => {
                            const {title, date, description, category} = node.frontmatter
                            const {slug} = node.fields
                            return (<Card
                                title={title}
                                date={date}
                                description={description}
                                category={category}
                                href={slug}/>)
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Tags
export const pageQuery = graphql `
  query {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            description
            date(formatString: "DD,MMMM, YYYY")
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`