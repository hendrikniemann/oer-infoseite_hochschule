import * as React from "react"
import { Box, Heading, Main, Grid } from "grommet"
import {
  RefinementList,
  InstantSearch,
  Hits,
  SearchBox,
} from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"
import Layout from "../components/layout"

const searchClient = algoliasearch(
  "8U7CL41ANW",
  "752e9976177a6f7ee110ea71773cb9c4"
)

export default function Search() {
  return (
    <Layout>
      <Main>
        <InstantSearch indexName="offers" searchClient={searchClient}>
          <Box>
            <SearchBox attribute="Title" />
          </Box>
          <Box direction="row" pad="xsmall">
            <Box flex={{ grow: 0 }} width="250px" height="300px">
              <RefinementList attribute="Fachgebiet (Stichpunkte, nicht Fächer)" />
              {/* <Heading>Mein Fachgebiet ist:</Heading>
              <Heading>Und ich interessiere mich für:</Heading>
              <Heading>Mein Kurs-Niveau ist:</Heading> */}
            </Box>
            <Box flex={{ grow: 1 }} pad="xxsmall" width="400px">
              <Heading size="small">Ergebnisse</Heading>
              <Hits />
            </Box>
          </Box>
        </InstantSearch>
      </Main>
    </Layout>
  )
}

function Hit(props) {}
