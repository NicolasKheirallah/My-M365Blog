import React, {useState} from "react";
import {useStaticQuery, graphql} from 'gatsby'

const NavigationSearchBar = () => {
    const data = useStaticQuery(graphql `
          query pageQuery {
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
    `)
    const allPosts = data.allMdx.edges
    const emptyQuery = ""
    const [state,
        setState] = useState({filteredData: [], query: emptyQuery})

    const handleInputChange = event => {
        const query = event.target.value
        const posts = data.allMdx.edges || []
        const filteredData = posts.filter(post => {
            const {title, description, category} = post.node.frontmatter
            return (description.toLowerCase().includes(query.toLowerCase()) || title.toLowerCase().includes(query.toLowerCase()) || category.toLowerCase().includes(query.toLowerCase()))
        })
        setState({query, filteredData})
    }
    const {filteredData, query} = state
    const hasSearchResults = filteredData && query !== emptyQuery
    const posts = hasSearchResults
        ? filteredData
        : allPosts

        console.log(posts);

        {posts.map(({node}) => {
          console.log(node)
          })}
    return (
        <div class="navSearch">
            <input
                type="search"
                id="search-field"
                name="Search-field"
                placeholder="Search"
                onChange={handleInputChange}
                class="dark:bg-gray-700 bg-opacity-40 rounded border border-gray-700 focus:ring-2 focus:shadow-lg text-base outline-none text-gray-100 py-1 px-3 transition-colors duration-200 ease-in-out"/>
            <div class="navSearchResults container mx-auto w-full justify-between m-2 top-10 absolute h-auto hidden">
                  <ui>
      {posts.map(({node}) => {
                            const {title, date, description, category} = node.frontmatter
                            const {slug} = node.fields
                            return (
                              <li class="py-1"><a class="block font-bold text-base uppercase cursor-pointer">{title}</a></li>
                            )
                        })}
                </ui>
      </div>
        </div>
    )

}
export default NavigationSearchBar
