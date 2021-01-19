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
            date(formatString: "DD MMMM YYYY")
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
    return (
        <div class="navSearch">
            <input
                type="search"
                id="search-field"
                name="Search-field"
                placeholder="Search"
                onChange={handleInputChange}
                class="dark:bg-gray-700 bg-opacity-40 rounded-lg border border-gray-700 focus:ring-2 focus:shadow-lg text-base outline-none text-gray-100 py-1 px-3 transition-colors duration-200 ease-in-out"/>
            <div class="navSearchResults flex py-5 justify-between absolute z-40 pr-5">
                  <div class="overflow-hidden bg-white rounded-lg shadow-lg">
      {posts.map(({node}) => {
                            const {title, date, description} = node.frontmatter
                            const {slug} = node.fields
                            return (
                              <a class="block group hover:bg-blue p-4 border-b hover:bg-gray-400" href={slug}>
                                <p class="font-bold text-md text-black ">{title}</p>
                                <p class="text-sm text-black">{description}</p>
                                <p class="text-xs right-0 text-black">{date}</p>
                                </a>
                            )
                        })}
                </div>
      </div>
        </div>
    )

}
export default NavigationSearchBar
