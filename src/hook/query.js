import { useStaticQuery, graphql } from "gatsby"
export const query = () => {
  const { data } = useStaticQuery(
    graphql `
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
        }
      }
    }
  }
`) 
  return data
}
