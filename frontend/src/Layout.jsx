import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import styled from "styled-components";

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Layout = () => {
  return (
    <>
      <MainContent id="content">
        <Outlet />
      </MainContent>
      <Footer />
    </>
  );
};

export default Layout;