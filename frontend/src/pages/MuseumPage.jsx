import { useEffect, useState } from "react"
import styled from "styled-components"
import { MuseumCardContainer } from "../components/MuseumCardContainer"
import { SearchBar } from "../components/SearchBar"
import { FilterBar } from "../components/FilterBar"
import StyledButton from "../components/styled/Button.styled"

export const MuseumPage = () => {
  const [museums, setMuseums] = useState([])
  const [results, setResults] = useState([])
  const [amountToShow, setAmountToShow] = useState(8)
  const [filters, setFilters] = useState({
    country: "",
    category: "",
    hasCafe: false,
    ticketPriceFree: false,
  })
  const [noResults, setNoResults] = useState(false)

  useEffect(() => {
    const fetchMuseums = async () => {
      try {
        const response = await fetch("https://museek-2ejb.onrender.com/museums")
        if (!response.ok) {
          throw new Error("Error fetching museums")
        }
        const data = await response.json()
        setMuseums(data)
      } catch (error) {
        console.error("There was en error fetching data:", error)
      }
    }

    fetchMuseums()
  }, [])

  const filterMuseums = (museums) => {
    return museums.filter((museum) => {
      const matchesCountry = filters.country
        ? museum.location.toLowerCase().includes(filters.country.toLowerCase())
        : true
      const matchesCategory = filters.category
        ? museum.category === filters.category
        : true
      const matchesHasCafe = filters.hasCafe ? museum.has_cafe : true
      const matchesTicketPriceFree = filters.ticketPriceFree
        ? museum.ticket_price.toLowerCase() === "free"
        : true

      return (
        matchesCountry &&
        matchesCategory &&
        matchesHasCafe &&
        matchesTicketPriceFree
      )
    })
  }

  useEffect(() => {
    const checkNoResults = () => {
      const filteredMuseums = filterMuseums(museums)
      setNoResults(filteredMuseums.length === 0)
    }

    checkNoResults()
  }, [filters, museums, results])

  const showMore = () => setAmountToShow(amountToShow + 8)

  const museumsToShow =
    results.length === 0 ? filterMuseums(museums) : filterMuseums(results)

  return (
    <MuseumPageContainer>
      <Background />
      <SearchBar setResults={setResults} />
      <FilterBar setFilters={setFilters} />
      {noResults ? (
        <NoResultsMessage>
          No results found for the selected filters.
        </NoResultsMessage>
      ) : (
        <>
          <MuseumCardContainer
            results={museumsToShow}
            amountToShow={amountToShow}
          />
          <ButtonContainer>
            {amountToShow < museumsToShow.length && (
              <StyledButton onClick={showMore}>Show more</StyledButton>
            )}
          </ButtonContainer>
        </>
      )}
    </MuseumPageContainer>
  )
}

const MuseumPageContainer = styled.div`
  padding-top: 80px;
`
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333333;
  z-index: -1;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #333333;
  padding: 50px 0;
`
const NoResultsMessage = styled.p`
  color: white;
  text-align: center;
  margin-top: 10px;
  font-size: 20px;
`