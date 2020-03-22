import * as React from "react"
import { Box, Heading } from "grommet"
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
      <InstantSearch indexName="offers" searchClient={searchClient}>
        <SearchBox attribute="Title" />
        <Heading>Mein Fachgebiet ist:</Heading>
        <RefinementList attribute="Fachgebiet (Stichpunkte, nicht Fächer)" />

        <Heading>Und ich interessiere mich für:</Heading>
        <Heading>Mein Kurs-Niveau ist:</Heading>
        <Hits />
      </InstantSearch>
    </Layout>
  )
}

function Hit(props) {}
