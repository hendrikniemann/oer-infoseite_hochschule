import * as React from "react"
import { Header as Header$, Box, Button } from "grommet"
import { Link} from "gatsby"
import styled from "styled-components"
import { MaxWidth } from "./util"

const HeaderBox = styled(Header$)`
  display: flex;
  fontFamily: "Roboto";
  fontSize: "18px";
`

export default function Header(props) {
  return (
    <HeaderBox direction="row" background="rgba(162, 227, 241, 0.76)" style={{height: '150px', width: '100%',}}>
        <Box>
            <p style={{ marginLeft: '156px', fontSize: '72px', fontFamily: 'Roboto Slab', fontStyle: 'Bold', color: '#003C42',}}>DigiCampus</p>
        </Box>
        <Box grow="grow" direction="row-reverse" style={{align: 'right', marginRight: '156px',}}>
            <Box>
                <Button primary label="Inhalt Vorschlagen &#9002;" color="#003C42" href="/inhaltVorschlagen"/>
            </Box>
            <Box>
                <Link to="/unsereQuellen" style={{display: 'inline-block', margin: '0 1rem 0 0'}}>Unsere Quellen</Link>
            </Box>
            <Box>
                <Link to="/faq" style={{display: 'inline-block', margin: '0 1rem 0 0'}}>FAQ</Link>
            </Box>
            <Box>
                <Link to="/about" style={{display: 'inline-block', margin: '0 1rem 0 0'}}>About</Link>
            </Box>
        </Box>
    </HeaderBox>
  )
}
