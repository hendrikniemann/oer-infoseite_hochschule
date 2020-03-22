import * as React from "react"
import { Box, Heading, Main, Text, Button } from "grommet"
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
  const [isFirstPage, setIsFirstPage] = React.useState(true)
  return (
    <Layout>
      <Main>
        <InstantSearch indexName="offers" searchClient={searchClient}>
          <div hidden={!isFirstPage}>
            <Heading>Mein Fachgebiet ist:</Heading>
            <Heading>Und ich interessiere mich für:</Heading>
            <Heading>Mein Kurs-Niveau ist:</Heading>
            <Button primary onClick={() => setIsFirstPage(false)}>
              alle Ressourcen
            </Button>
          </div>
          <div hidden={isFirstPage}>
            <Box>
              <SearchBox attribute="Title" />
            </Box>
            <Box direction="row" pad="xsmall">
              <Box flex={{ grow: 0 }} width="320px" height="300px">
                <Heading size="xxsmall">Lernformat</Heading>
                <RefinementList attribute="learningFormat" />
                <Heading size="xxsmall">Subject</Heading>
                <RefinementList attribute="subjectArea" />
              </Box>
              <Box flex={{ grow: 1 }} pad="xxsmall" width="400px">
                <Heading size="small">Ergebnisse</Heading>
                <Hits hitComponent={Hit} />
              </Box>
            </Box>
          </div>
        </InstantSearch>
      </Main>
    </Layout>
  )
}

function Hit(props) {
  return (
    <Box>
      <Text size="xxxsmall">
        {props.hit.subjectArea} - {props.hit.studyPhase}
      </Text>
      <Heading size="xxsmall">{props.hit.title}</Heading>
    </Box>
  )
}
