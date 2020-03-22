import * as React from "react"
import { Box, Heading, Main, Text, Button, CheckBox } from "grommet"
import {
  RefinementList,
  InstantSearch,
  Hits,
  SearchBox,
  connectRefinementList,
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
            <Heading size="small">Mein Fachgebiet ist:</Heading>
            <CustomRefinementList attribute="subjectArea" />
            <Heading size="small">Und ich interessiere mich für:</Heading>
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
                <Heading size="xxsmall">Studienphase</Heading>
                <RefinementList attribute="studyPhase" />
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

const CustomRefinementList = connectRefinementList(props => (
  <Box direction="row" wrap>
    {props.items.map(item => (
      <Box width="320px" key={item.label}>
        <CheckBox
          checked={item.isRefined}
          label={item.label + " (" + item.count + ")"}
          onChange={event => {
            event.preventDefault()
            props.refine(item.value)
          }}
        />
      </Box>
    ))}
  </Box>
))

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
