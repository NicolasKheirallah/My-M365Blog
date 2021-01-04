import React, {useState} from "react";
import {graphql} from "gatsby"
import Layout from "../components/layout";
import Card from "../components/card/card";

const Posts = props => {
    const {data} = props
    const allPosts = data.allMdx.edges
    const emptyQuery = ""
    const [state,
        setState] = useState({filteredData: [], query: emptyQuery})

    const handleInputChange = event => {
        const query = event.target.value
        const {data} = props
        const posts = data.allMdx.edges || []
        const filteredData = posts.filter(post => {
            const {title, description, category} = post.node.frontmatter
            console.log(category)
            return (description.toLowerCase().includes(query.toLowerCase()) || title.toLowerCase().includes(query.toLowerCase()) || category.toLowerCase().includes(query.toLowerCase()))
        })
        setState({query, filteredData})
    }
    const {filteredData, query} = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const posts = hasSearchResults
        ? filteredData
        : allPosts
    return (
        <Layout>
            <section class="bg-indigo-dark p-8">
                <div class="container mx-auto py-8">
                    <input
                        class="w-full h-16 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg focus:border-gray-500 outline-none dark:text-gray-100 py-1 dark:bg-gray-700"
                        type="text"
                        aria-label="Search"
                        placeholder="Search something like Powerapps..."
                        onChange={handleInputChange}/>
                </div>
            </section>
            <section class="bg-indigo-dark p-8">
                <div class="container flex my-6 mx-auto ">
                    <div class="my-1 px-1 w-full grid grid-cols-4">

                        {posts.map(({node}) => {
                            const {title, date, description, category} = node.frontmatter
                            const { slug } = node.fields
                            return (<Card title={title} date={date} description={description} category={category} href={slug}/>)
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Posts
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