import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grommet, Footer, Box } from "grommet"
import { Reset } from "styled-reset"
import styled from "styled-components"

import Header from "./header.js"

const Wrapper = styled(Box)`
  min-height: 100vh;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Grommet>
      <Wrapper direction="column" justify="between">
        <Box grow="grow">
          <Header />
          <Reset />
          {children}
        </Box>
        <Footer background="brand">Hello</Footer>
      </Wrapper>
    </Grommet>
  )
}

export default Layout
