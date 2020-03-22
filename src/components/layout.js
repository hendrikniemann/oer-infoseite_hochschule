import React from "react"
import { PoweredBy } from "react-instantsearch-dom"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Grommet, Footer as Footer$, Box } from "grommet"
import { Reset } from "styled-reset"
import styled from "styled-components"

import Header, { MenuLink } from "./header.js"
import { MaxWidth } from "./util.js"

const Wrapper = styled(Box)`
  min-height: 100vh;
`

const theme = {
  global: {
    font: {
      family: "Roboto",
    },
    colors: {
      brand: "#121E44",
      "accent-1": "#A6FF7C",
      text: {
        light: "#415163",
        dark: "#FFFFFF",
      },
    },
  },
  heading: {
    font: {
      family: "Roboto Slab",
      weight: "bold",
    },
  },
}

const FooterBox = styled(Footer$)`
  display: flex;
  fontsize: "18px";
`

const Layout = ({ children, largeHeader }) => {
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
      <Reset />
      <Wrapper direction="column" justify="between">
        <Box grow="grow">
          <Header largeHeader={largeHeader} />
          {children}
        </Box>
        <FooterBox background="brand" direction="row" justify="center">
          <MaxWidth
            grow="grow"
            direction="row-reverse"
            pad={{ vertical: "small" }}
          >
            <MenuLink to="/kontakt">Kontakt</MenuLink>
            <MenuLink to="/datenschutz">Datenschutz</MenuLink>
            <MenuLink to="/impressum">Impressum</MenuLink>
          </MaxWidth>
        </FooterBox>
      </Wrapper>
    </Grommet>
  )
}

export default Layout
