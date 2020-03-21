import React from "react"
import { Link } from "gatsby"
import { Heading } from "grommet"

import Layout from "../components/layout.js"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Heading>Start page</Heading>
  </Layout>
)

export default IndexPage
