import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage3 = ({data}) => (
  <Layout>
    <SEO title="HomePage" />
    <h1>HomePage2</h1>
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
  query HomePage3Query {
    allContentfulCategory(limit: 3) {
      nodes {
        title
        slug
        id
      }
    }
  }
`

export default HomePage3
