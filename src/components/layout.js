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

const theme = {
  global: {
    font: {
      family: "Roboto",
    },
    colors: {
      brand: "#003C42",
      "accent-1": "#A2E3F1",
      text: {
        light: "#003C42",
        dark: "#E1D1BA",
      },
    },
  },
  botton: {
    colors: {
      brand: "#003C42",
    },
  },
  heading: {
    font: {
      family: "Roboto Slab",
    },
  },
}

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
    <Grommet theme={theme}>
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
