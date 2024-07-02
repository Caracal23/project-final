import { useState, useEffect } from "react"
import styled from "styled-components"

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const museumImages = [
    "museum1.jpg",
    "museum2.jpg",
    "museum3.jpg",
    "museum4.jpg",
    "museum5.jpg",
    "museum6.jpg",
    "museum7.jpg",
  ]

  const autoScroll = true
  let intervalTime = 8000
  let slideInterval

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === museumImages.length - 1 ? 0 : currentSlide + 1
    )
  }

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(() => {
    if (autoScroll) {
      auto()
    }
    return () => clearInterval(slideInterval)
  }, [currentSlide])

  return (
    <CarouselContainer>
      <StyledHero
        src={museumImages[currentSlide]}
        alt="background image of different musuems"
      />
    </CarouselContainer>
  )
}

const CarouselContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`

const StyledHero = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
