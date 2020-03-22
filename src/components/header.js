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
        height="273px"
        pad={{ top: "large", horizontal: "small" }}
      >
        <Box>
          <img
            src={logo}
            style={{ width: 546, height: 173, backgroundSize: "546px 173px" }}
          />
        </Box>
        <Box grow="grow" direction="row-reverse" align="center" height="40px">
          <Box>
            <Button
              primary
              label="Inhalt Vorschlagen &#9002;"
              color="#003C42"
              href="/inhalt-vorschlagen"
            />
          </Box>
          <Box>
            <MenuLink to="/unsereQuellen">Unsere Quellen</MenuLink>
          </Box>
          <Box>
            <MenuLink to="/faq">FAQ</MenuLink>
          </Box>
          <Box>
            <MenuLink to="/about">About</MenuLink>
          </Box>
        </Box>
      </MaxWidth>
    </HeaderBox>
  )
}

export const MenuLink = styled(Link)`
  display: inline-block;
  margin-right: 1.5em;
  color: ${props => props.theme.global.colors.text.light};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.global.colors.text.light};
    text-decoration: underline;
  }
`
