import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Grommet, Footer } from "grommet"
import { Reset } from "styled-reset"

import Header from "./header.js"

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
      <Header />
      <Reset />

      {children}
      <Footer background="brand">Hello</Footer>
    </Grommet>
  )
}

export default Layout
