import styled from "styled-components"
import { useEffect } from "react"
import { Background } from "../components/styled/Background.styled"

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <StyledAboutPage>
      <Background bgColor="#dee0e2" />

      <Content>
        <h3>About MuSeek</h3>
        <p>
          Welcome to MuSeek, your portal to discovering hidden treasures in the
          world of museums. Developed by Alma and Etna as our final project at
          the Technigo web development bootcamp, MuSeek is a unique webpage
          crafted for the curious traveler and cultural enthusiast.
        </p>

        <p>
          With MuSeek, explore lesser-known museums from around the globe,
          offering an authentic alternative to mainstream tourist attractions.
          Powered by React, Node.js, and styled components, our platform ensures
          a seamless and visually engaging experience as you embark on a journey
          to uncover captivating cultural wonders.
        </p>

        <p>
          Whether you seek off-the-beaten-path destinations or simply crave a
          new perspective, MuSeek is your trusted companion for enriching museum
          exploration.
        </p>
      </Content>
    </StyledAboutPage>
  )
}

const StyledAboutPage = styled.div`
  background-color: #dee0e2;

  padding: 100px 20px 20px 20px;
  margin: 0 auto;
  max-width: 800px;
`

const Content = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #222;
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 20px;
    color: #333;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 450px) {
    padding: 15px;
    margin-top: 10px;
  }
`
