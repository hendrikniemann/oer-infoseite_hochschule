import * as React from "react"
import { Header as Header$, Box } from "grommet"
import styled from "styled-components"
import { MaxWidth } from "./util"

const HeaderBox = styled(Header$)`
  display: flex;
  justify-content: center;
`

export default function Header(props) {
  return (
    <HeaderBox background="brand">
      <MaxWidth>Hello World</MaxWidth>
    </HeaderBox>
  )
}
