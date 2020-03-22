import React from "react"
import { PoweredBy } from "react-instantsearch-dom"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Grommet, Footer as Footer$, Box } from "grommet"
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

const FooterBox =styled(Footer$)`
  display: flex;
  fontFamily: "Roboto";
  fontSize: "18px";
  fontColor: "#003C42";
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
    <Grommet theme={theme}>
      <Wrapper direction="column" justify="between">
        <Box grow="grow">
          <Header />
          <Reset />
          {children}
        </Box>
        <FooterBox background="rgba(162, 227, 241, 0.76)">
          <Box  style={{ marginLeft: '156px',}}>
            { /* <PoweredBy/> */ }
          </Box>
          <Box grow="grow" direction="row-reverse" style={{align: 'right', marginRight: '156px',}}>
            <Box>
              <Link to="/kontakt" style={{display: 'inline-block', margin: '0 1rem 0 0'}}>Kontakt</Link>
            </Box>
            <Box>
              <Link to="/datenschutz" style={{display: 'inline-block', margin: '0 1rem 0 0'}}>Datenschutz</Link>
            </Box>
            <Box>
              <Link to="/impressum" style={{display: 'inline-block', margin: '0 1rem 0 0'}}>Impressum</Link>
            </Box>
          </Box>
        </FooterBox>
      </Wrapper>
    </Grommet>
  )
}

export default Layout
