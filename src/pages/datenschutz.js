import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout.js"
import SEO from "../components/seo"
import { Heading, Box } from "grommet"
import { MaxWidth } from "../components/util"

const Datenschutz = () => {
  // const data = useStaticQuery(graphql`

  // `)

  return (
    <Layout>
      <SEO title="Datenschutz" />
      <Box align="center">
        <MaxWidth
          maxWidth={800}
          pad="medium"
          direction="row"
          justify="center"
          background="white"
          style={{ borderRadius: 6 }}
          margin={{ top: "-40px" }}
        >
          <Box>
            <Heading>Datenschutz</Heading>
          </Box>
        </MaxWidth>
      </Box>
    </Layout>
  )
}

export default Datenschutz
