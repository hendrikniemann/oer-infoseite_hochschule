import * as React from "react"
import { Header as Header$, Box, Button } from "grommet"
import { Link } from "gatsby"
import styled from "styled-components"
import { MaxWidth } from "./util"
import logo from "../images/logo.svg"
import laptopSrc from "../images/laptop.png"
import stiftSrc from "../images/Stift.png"

const HeaderBox = styled(Header$)`
  display: flex;
  fontsize: "18px";
`

export default function Header(props) {
  return (
    <HeaderBox background="brand" direction="row" justify="center">
      <MaxWidth
        maxWidth={1600}
        direction="row"
        justify="center"
        style={
          props.largeHeader
            ? {
                backgroundImage: `url('${laptopSrc}')`,
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "right",
              }
            : null
        }
      >
        <MaxWidth
          direction="row"
          style={
            props.largeHeader
              ? {
                  width: "100%",
                  backgroundImage: `url('${stiftSrc}')`,
                  backgroundRepeat: "no-repeat",
                  backgroundPositionY: "bottom",
                }
              : { width: "100%" }
          }
          justify="between"
          height={props.largeHeader ? "363px" : "273px"}
          pad={{ top: "large", horizontal: "small" }}
        >
          <Box>
            <Link href="/">
              <img
                src={logo}
                style={{
                  width: 546,
                  height: 173,
                  backgroundSize: "546px 173px",
                }}
              />
            </Link>
          </Box>
          <Box grow="grow" direction="row-reverse" align="center" height="40px">
            <Box>
              <Button
                primary
                label="Lernangebot Vorschlagen &#9002;"
                color="accent-1"
                href="/inhalt-vorschlagen"
                style={{ boxShadow: "0px 3px 9px rgba(0, 0, 0, 0.25)" }}
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
      </MaxWidth>
    </HeaderBox>
  )
}

export const MenuLink = styled(Link)`
  display: inline-block;
  margin-right: 1.5em;
  color: ${props => props.theme.global.colors.text.dark};
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.global.colors.text.dark};
    text-decoration: underline;
  }
`
