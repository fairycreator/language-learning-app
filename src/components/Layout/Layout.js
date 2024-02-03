import { Outlet } from "react-router-dom";
import FlexContainer from "../Container/CentredFlexContainer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <FlexContainer>
        <Header />
      </FlexContainer>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
