import { Link, useLocation } from "react-router-dom"
import { LuUser2 } from "react-icons/lu"
import { RiCloseLine, RiMenuLine } from "react-icons/ri"
import { useState } from "react"
import styled from "styled-components"

export const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <StyledNavBar>
      {/* Phone Section */}
      <NavSectionPhone>
        <MobileMenuIcon onClick={toggleMenu}>
          {showMenu ? <RiCloseLine /> : <RiMenuLine />}
        </MobileMenuIcon>
        <DropdownMenu open={showMenu}>
          <DropdownList>
            <DropdownListItem>
              <StyledLink to={"/"} onClick={closeMenu}>
                Home
              </StyledLink>
            </DropdownListItem>
            <DropdownListItem>
              <StyledLink to={"/museums"} onClick={closeMenu}>
                Museums
              </StyledLink>
            </DropdownListItem>
            <DropdownListItem>
              <StyledLink to={"/about"} onClick={closeMenu}>
                About
              </StyledLink>
            </DropdownListItem>
            <DropdownListItem>
              <StyledLink to={"/register"} onClick={closeMenu}>
                Register
              </StyledLink>
            </DropdownListItem>
            <DropdownListItem>
              <StyledLink to={"/login"} onClick={closeMenu}>
                Login
              </StyledLink>
            </DropdownListItem>
            <DropdownListItem>
              <StyledLink to={"/user-page"} onClick={closeMenu}>
                User page
              </StyledLink>
            </DropdownListItem>
          </DropdownList>
        </DropdownMenu>
        <MobileLogo onClick={goToTop} src="icon4-white.png" alt="Museek Logo" />
      </NavSectionPhone>

      {/* Tablet Section */}
      <NavSectionTablet>
        <NavSectionLeft>
          <StyledLink to={"/"} isActive={location.pathname === "/"}>
            Home
          </StyledLink>
          <StyledLink
            to={"/museums"}
            isActive={location.pathname === "/museums"}>
            Museums
          </StyledLink>
          <StyledLink to={"/about"} isActive={location.pathname === "/about"}>
            About
          </StyledLink>
        </NavSectionLeft>

        <NavBarImageContainer>
          <NavBarImage
            onClick={goToTop}
            src="icon4-white.png"
            alt="Museek Logo"
          />
        </NavBarImageContainer>

        <NavSectionRight>
          <StyledLink
            to={"/register"}
            isActive={location.pathname === "/register"}>
            Register
          </StyledLink>
          <StyledLink to={"/login"} isActive={location.pathname === "/login"}>
            Login
          </StyledLink>
          <StyledLink
            to={"/user-page"}
            isActive={location.pathname === "/user-page"}>
            <LuUser2 />
          </StyledLink>
        </NavSectionRight>
      </NavSectionTablet>
    </StyledNavBar>
  )
}

const NavBarImageContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
`
const NavBarImage = styled.img`
  height: 40px;
`
const StyledNavBar = styled.nav`
  z-index: 999;
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 60px;
  padding: 10px 0;
`

const NavSectionTablet = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    padding: 0 20px;
  }
`

const NavSectionRight = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  padding-right: 25px;
`

const NavSectionLeft = styled.div`
  display: flex;
  flex-grow: 1;
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 10px;
  display: flex;
  align-items: center;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 5px;
  }
`
const NavSectionPhone = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 20px;

  @media (min-width: 768px) {
    display: none;
  }
`

const MobileMenuIcon = styled.div`
  font-size: 48px;
  cursor: pointer;
  padding-top: 7px;

  @media (min-width: 768px) {
    display: none;
  }
`

const DropdownMenu = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100%;
  padding: 20px 0;
  display: none;
  z-index: 999;

  ${(props) =>
    props.open &&
    `
      display: block;
    `}
`

const DropdownList = styled.ul`
  list-style-type: none;
  padding: 0 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const DropdownListItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-left: 20px;
  }
`

const MobileLogo = styled.img`
  height: 40px;
  cursor: pointer;
`
