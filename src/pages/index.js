import * as React from "react"
import { Box, Heading, Main, Text, Button, CheckBox } from "grommet"
import {
  RefinementList,
  InstantSearch,
  Hits,
  SearchBox,
  connectRefinementList,
  connectHits,
  connectCurrentRefinements,
} from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"
import Layout from "../components/layout"
import { MaxWidth } from "../components/util"
import formatDistanceStrict from "date-fns/formatDistanceStrict"
import de from "date-fns/locale/de"

const searchClient = algoliasearch(
  "8U7CL41ANW",
  "752e9976177a6f7ee110ea71773cb9c4"
)

export default function Home() {
  const [isFirstPage, setIsFirstPage] = React.useState(true)
  return (
    <Layout>
      <Main>
        <InstantSearch indexName="offers" searchClient={searchClient}>
          <div hidden={!isFirstPage}>
            <Box background="accent-1" height="140px">
              <Box height="100px" justify="center" />
            </Box>
            <Box align="center">
              <MaxWidth
                maxWidth={800}
                pad="medium"
                direction="row"
                justify="center"
                background="white"
                style={{ borderRadius: 6 }}
                margin={{ top: "-40px" }}
              >
                <Box>
                  <Heading size="small">Mein Fachgebiet ist:</Heading>
                  <CustomRefinementList attribute="subjectArea" />
                  <Heading size="small">Und ich interessiere mich für:</Heading>
                  <CustomRefinementList attribute="tags" />
                  <Box direction="row-reverse">
                    <NextButton onClick={() => setIsFirstPage(false)} />
                  </Box>
                </Box>
              </MaxWidth>
            </Box>
          </div>
          <div hidden={isFirstPage}>
            <Box direction="row" justify="center">
              <MaxWidth direction="row" pad="xsmall">
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
                    Fachgebiet
                  </Heading>
                  <RefinementList attribute="subjectArea" />
                  <Heading
                    size="xxsmall"
                    margin={{ top: "small", bottom: "xsmall" }}
                  >
                    Medium
                  </Heading>
                  <RefinementList attribute="media" />
                </Box>
                <Box flex={{ grow: 1 }} width="400px">
                  <Heading margin="xsmall" size="small">
                    Ergebnisse
                  </Heading>
                  <CustomHits hitComponent={Hit} />
                </Box>
              </MaxWidth>
            </Box>
          </div>
        </InstantSearch>
      </Main>
    </Layout>
  )
}

const CustomRefinementList = connectRefinementList(props => (
  <Box direction="row" wrap pad={{ horizontal: "large", vertical: "medium" }}>
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
    <Box
      grow
      width="300px"
      border="all"
      margin="xsmall"
      pad="small"
      height="200px"
      justify="between"
    >
      <Box>
        <Text size="xsmall">
          {props.hit.subjectArea} - {props.hit.studyPhase}
        </Text>
        <Text size="large">{props.hit.title}</Text>
      </Box>
      <Box direction="row-reverse" justify="between">
        <Button target="_blank" href={props.hit.link} primary label="Details" />
        {props.hit.workload ? (
          <Box direction="row" align="center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.99 4C6.47 4 2 8.48 2 14C2 19.52 6.47 24 11.99 24C17.52 24 22 19.52 22 14C22 8.48 17.52 4 11.99 4ZM12 22C7.58 22 4 18.42 4 14C4 9.58 7.58 6 12 6C16.42 6 20 9.58 20 14C20 18.42 16.42 22 12 22ZM11 9H12.5V14.25L17 16.92L16.25 18.15L11 15V9Z"
                fill="#003C42"
              />
            </svg>
            <Text margin="xsmall">
              {formatDistanceStrict(0, props.hit.workload * 1000, {
                locale: de,
              })}
            </Text>
          </Box>
        ) : null}
      </Box>
    </Box>
  )
}

// Hack to know if there are current filters
const NextButton = connectCurrentRefinements(props => (
  <Button
    primary
    size="large"
    onClick={props.onClick}
    color="brand"
    margin={{ top: "large" }}
    label={props.items.length > 0 ? "Los geht's" : "Alle Ressourcen"}
  />
))
