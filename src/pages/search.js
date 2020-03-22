import * as React from "react"
import { Box, Heading, Main, Text, Button, CheckBox } from "grommet"
import {
  RefinementList,
  InstantSearch,
  Hits,
  SearchBox,
  connectRefinementList,
  connectHits,
} from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"
import Layout from "../components/layout"
import { MaxWidth } from "../components/util"

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
            <Box pad="small" direction="row" justify="center">
              <MaxWidth>
                <Heading size="small">Mein Fachgebiet ist:</Heading>
                <CustomRefinementList attribute="subjectArea" />
                <Heading size="small">Und ich interessiere mich für:</Heading>
                <Box direction="row-reverse">
                  <Button
                    primary
                    onClick={() => setIsFirstPage(false)}
                    fill={false}
                  >
                    alle Ressourcen
                  </Button>
                </Box>
              </MaxWidth>
            </Box>
          </div>
          <div hidden={isFirstPage}>
            <Box direction="row" pad="xsmall">
              <Box
                flex={{ grow: 0 }}
                width="320px"
                direction="column"
                pad="xsmall"
              >
                <SearchBox attribute="Title" />
                <Heading
                  size="xxsmall"
                  margin={{ top: "small", bottom: "xsmall" }}
                >
                  Studienphase
                </Heading>
                <RefinementList attribute="studyPhase" />
                <Heading
                  size="xxsmall"
                  margin={{ top: "small", bottom: "xsmall" }}
                >
                  Lernformat
                </Heading>
                <RefinementList attribute="learningFormat" />
                <Heading
                  size="xxsmall"
                  margin={{ top: "small", bottom: "xsmall" }}
                >
                  Subject
                </Heading>
                <RefinementList attribute="subjectArea" />
              </Box>
              <Box flex={{ grow: 1 }} width="400px">
                <Heading margin="xsmall" size="small">
                  Ergebnisse
                </Heading>
                <CustomHits hitComponent={Hit} />
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
    {[...props.items]
      .sort((a, b) => (b.label < a.label ? 1 : -1))
      .map(item => (
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

const CustomHits = connectHits(props => (
  <Box direction="row" wrap>
    {props.hits.map(hit => (
      <Hit hit={hit} />
    ))}
  </Box>
))

function Hit(props) {
  return (
    <Box grow="grow" width="400px" border="all" margin="xsmall" pad="small">
      <Text size="xxxsmall">
        {props.hit.subjectArea} - {props.hit.studyPhase}
      </Text>
      <Box>
        <Heading size="xxsmall">{props.hit.title}</Heading>
      </Box>
      <Box>{props.hit.workload}</Box>
    </Box>
  )
}
