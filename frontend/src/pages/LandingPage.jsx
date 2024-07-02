import styled from "styled-components"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Lottie from "lottie-react"

import { SearchBar } from "../components/SearchBar"
import { MuseumCardContainer } from "../components/MuseumCardContainer"
import { HeroSection } from "../components/HeroSection"
import { Newsletter } from "../components/Newsletter"
import { MuseumMap } from "../components/MuseumMap"
import { StyledButton } from "../components/styled/Button.styled"
import { Background } from "../components/styled/Background.styled"
import { CTA } from "../components/CTA"
import lottieDots from "../assets/lottie-dots.json"

export const LandingPage = () => {
  const [museums, setMuseums] = useState([])
  const [results, setResults] = useState([])
  const [amountToShow, setAmountToShow] = useState(8)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  useEffect(() => {
    const fetchMuseums = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://museek-2ejb.onrender.com/museums")
        if (!response.ok) {
          throw new Error("Error fetching museums")
        }
        const data = await response.json()
        setMuseums(data)
      } catch (error) {
        console.error("There was an error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchMuseums()
  }, [])

  const museumsToShow = results.length === 0 ? museums : results

  return (
    <div>
      <LandingPageContainer>
        <Background bgColor="#222222" />

        <HeroSection />
        <CTA />

        {loading ? (
          <LottieContainer>
            <Lottie aria-label="Loading animation" animationData={lottieDots} />
          </LottieContainer>
        ) : (
          <>
            <SearchBar setResults={setResults} />
            <MuseumCardContainer
              results={museumsToShow}
              amountToShow={amountToShow}
            />
            <ButtonContainer>
              {" "}
              <Link to="/museums">
                <StyledButton aria-label="Discover more musuems">
                  Discover more...
                </StyledButton>
              </Link>
            </ButtonContainer>
            <MuseumMap
              museums={museumsToShow}
              showLink={true}
              center={[48.8566, 2.3522]}
            />
          </>
        )}

        <Newsletter />
      </LandingPageContainer>
    </div>
  )
}

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #222222;
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #222222;
  padding: 30px 0 50px 0;
`
const LottieContainer = styled.div`
  background-color: #222222;
  max-width: 400px;
  margin: 0 auto;
`
