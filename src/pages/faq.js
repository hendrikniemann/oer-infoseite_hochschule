import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout.js"
import SEO from "../components/seo"
import { Heading } from "grommet"

const Faq = () => {
  // const data = useStaticQuery(graphql`

  // `)

  return (
    <Layout>
      <SEO title="FAQ" />
      <Heading>FAQ</Heading>
    </Layout>
  )
}

export default Faq
