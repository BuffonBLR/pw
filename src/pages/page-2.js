import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage2 = ({data}) => (
  <Layout>
    <SEO title="HomePage" />
    <h1>HomePage2</h1>
    <Link to="/">Go back to the homepage</Link>
    <p>{JSON.stringify(data)}</p>
  </Layout>
)

export const query = graphql`
  query HomePage2Query {
    allContentfulCategory(limit: 2) {
      nodes {
        title
        slug
        id
      }
    }
  }
`

export default HomePage2
