import * as React from "react"
import { Header as Header$, Box, Button } from "grommet"
import { Link } from "gatsby"
import styled from "styled-components"
import { MaxWidth } from "./util"
import logo from "../images/logo.svg"

const HeaderBox = styled(Header$)`
  display: flex;
  fontfamily: "Roboto";
  fontsize: "18px";
`

export default function Header(props) {
  return (
    <HeaderBox background="accent-1" direction="row" justify="center">
      <MaxWidth
        direction="row"
        style={{ width: "100%" }}
        justify="between"
        height="150px"
        pad="small"
      >
        <img src={logo} />
        <Box grow="grow" direction="row-reverse" align="center">
          <Box>
            <Button
              primary
              label="Inhalt Vorschlagen &#9002;"
              color="#003C42"
              href="/inhaltVorschlagen"
            />
          </Box>
          <Box>
            <Link
              to="/unsereQuellen"
              style={{
                display: "inline-block",
                margin: "0 1rem 0 0",
                textDecoration: "none",
                color: "#003C42",
              }}
            >
              Unsere Quellen
            </Link>
          </Box>
          <Box>
            <Link
              to="/faq"
              style={{
                display: "inline-block",
                margin: "0 1rem 0 0",
                textDecoration: "none",
              }}
            >
              FAQ
            </Link>
          </Box>
          <Box>
            <Link
              to="/about"
              style={{
                display: "inline-block",
                margin: "0 1rem 0 0",
                textDecoration: "none",
              }}
            >
              About
            </Link>
          </Box>
        </Box>
      </MaxWidth>
    </HeaderBox>
  )
}
