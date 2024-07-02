import styled from "styled-components"
import { useEffect } from "react"
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa"
import EtnaImage from "/etna.jpeg"
import AlmaImage from "/alma.png"
import { StyledContainer } from "../components/styled/LoginPage.styled.jsx"
import { Background } from "../components/styled/Background.styled.jsx"

export const ContactPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [])

  return (
    <StyledContainer>
      <Background bgColor="#dee0e2" />
      <ContentWrapper>
        <Title>Meet the developers behind MuSeek</Title>
        <Subtitle>Connect with us to learn more about our journey!</Subtitle>

        <DeveloperContainer>
          <DeveloperInfo>
            <DeveloperImage src={EtnaImage} alt="Image of Etna" />
            <DeveloperDetails>
              <DeveloperName>Etna Zuñiga</DeveloperName>
              <DeveloperBio>
                Former procurement professional turned web developer with a
                blend of analytical skills and attention to detail.
              </DeveloperBio>
              <SocialLinks>
                <SocialLink
                  href="https://www.linkedin.com/in/rosa-etna-zu%C3%B1iga-ruiz-a889818a/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedin />
                </SocialLink>
                <SocialLink
                  href="https://github.com/Caracal23"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGithub />
                </SocialLink>
                <SocialLink
                  href="https://grand-otter-76db0c.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGlobe />
                </SocialLink>
              </SocialLinks>
            </DeveloperDetails>
          </DeveloperInfo>

          <DeveloperInfo>
            <DeveloperImage src={AlmaImage} alt="Image of Alma" />
            <DeveloperDetails>
              <DeveloperName>Alma Herrström</DeveloperName>
              <DeveloperBio>
                Seasoned financial auditor transitioning into web development
                with a passion for problem-solving and optimization.
              </DeveloperBio>
              <SocialLinks>
                <SocialLink
                  href="https://www.linkedin.com/in/almaherrstrom/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaLinkedin />
                </SocialLink>
                <SocialLink
                  href="https://github.com/almaherris"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGithub />
                </SocialLink>
                <SocialLink
                  href="https://almaherrstrom.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <FaGlobe />
                </SocialLink>
              </SocialLinks>
            </DeveloperDetails>
          </DeveloperInfo>
        </DeveloperContainer>
      </ContentWrapper>
    </StyledContainer>
  )
}

const ContentWrapper = styled.div`
  padding: 40px 20px;
  text-align: center;
`

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #222;
`

const Subtitle = styled.p`
  margin-bottom: 30px;
  color: #555;
`

const DeveloperContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const DeveloperInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 500px) {
    flex-direction: row;
    gap: 20px;
  }
`

const DeveloperImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`

const DeveloperDetails = styled.div`
  text-align: left;
`

const DeveloperName = styled.h4`
  font-size: 18px;
  color: #222;
  margin-bottom: 0;
`

const DeveloperBio = styled.p`
  color: #555;
`

const SocialLinks = styled.div`
  margin-top: 10px;
`

const SocialLink = styled.a`
  font-size: 24px;
  color: #007bff;
  cursor: pointer;
  transition: color 0.3s;
  margin-right: 10px;

  &:hover {
    color: #0056b3;
  }
`
