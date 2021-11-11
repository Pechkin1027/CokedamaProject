import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import styled from "styled-components";
import CheckoutNav from "./Checkout/CheckoutNav";
import Head from "next/head";

const PageLayout = (props) => {
  return (
    <Wrapper>
      <Head>
        <title>
          Shopflow: Online Shopping - Bedding, Furniture, Decor, Home
          Improvement & more
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {props.Checkout ? <CheckoutNav /> : <NavBar />}
      <MainCont type={props.type}>{props.children}</MainCont>
      <Footer />
    </Wrapper>
  );
};

export default PageLayout;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 100%;
  background: white;
  position: relative;
`;
const MainCont = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: white;
  flex-direction: column;
  line-height: 1.2;
  color: ${(props) => props.theme.BoldText};
  @media ${(props) => props.theme.laptop} {
    width: ${(props) => (props.type === "PRODUCT" ? "1000px" : "100%")};
  }
  @media ${(props) => props.theme.laptopL} {
    width: ${(props) => (props.type === "PRODUCT" ? "1220px" : "1680px")};
  }
`;
