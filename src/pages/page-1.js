import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = ({data}) => (
  <Layout>
    <SEO title="HomePage" />
    <h1>Page1</h1>
    <Link to="/">Go back to the homepage</Link>
    <ul>
        {
            // map over the array here and display your list items
            (data.allContentfulCategory.nodes).map(function(item, key) {
                return (
                <li key={key}>
                    <span>{item.title}</span>
                </li>
                )
            })
        }
    </ul>
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    allContentfulCategory(limit: 4) {
      nodes {
        title
        slug
        id
      }
    }
  }
`

export default HomePage
