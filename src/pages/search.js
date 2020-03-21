import * as React from "react"
import { Box, Heading } from "grommet"
import { SearchBox, InstantSearch } from "react-instantsearch-dom"
import algoliasearch from "algoliasearch/lite"

const searchClient = algoliasearch("Your")

export default function Search() {
  return (
    <Box>
      {/* <InstantSearch searchClient={searchClient}>
        <SearchBox />
        <Heading>Mein Fachgebiet ist:</Heading>

        <Heading>Und ich interessiere mich für:</Heading>
        <Heading>Mein Kurs-Niveau ist:</Heading>
      </InstantSearch> */}
    </Box>
  )
}
