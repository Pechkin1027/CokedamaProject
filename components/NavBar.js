import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiMenu } from "react-icons/fi";
import SearchBar from "./NavBar/SearchBar";
import NavOption from "./NavBar/NavOption";
import SideMenu from "./NavBar/SideMenu";
import Link from "next/link";



export default function Navbar() {
  const [windowDimension, setWindowDimension] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(function onFirstMount() {
    function onScroll(text) {
      let innerWidth = text.srcElement.window.innerWidth;
      if (innerWidth < 970 && isTablet === false) {
        setIsTablet(true);
      }
      if (innerWidth > 970 && isTablet === true) {
        setIsTablet(false);
      }
      if (innerWidth < 540 && !isMobile) {
        setIsMobile(true);
      }
      if (innerWidth > 540 && isMobile) {
        setIsMobile(false);
      }
    }

    window.addEventListener("resize", onScroll);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onOpenMenu = () => {
    setOpenMenu(true);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <Wrapper>
      {/* <NavsWrapper> */}
      <Container>
        <Left>
          <SideMenu isOpen={openMenu} onClose={() => closeMenu()} />
          <MenuIcon onClick={() => setOpenMenu(true)}>
            <FiMenu />
          </MenuIcon>
          <Link href="/" passHref>
            <LogoTag>
              <SmallLogo src={"/ShopflowSmall.svg"} />
              <Logo src={"/ShopflowLogo.svg"} />
            </LogoTag>
          </Link>
          <SideLinks>
            <Link href="/about" passHref>
              <LogoTag>About Us</LogoTag>
            </Link>
            <Link href="/story" passHref>
              <LogoTag>Our Story</LogoTag>
            </Link>
            <Link href="/category" passHref>
              <LogoTag>Categories</LogoTag>
            </Link>
            <Link href="/contact" passHref>
              <LogoTag>Contact Us</LogoTag>
            </Link>
          </SideLinks>
          {/* <SearchBar /> */}
        </Left>
        <Right>
          <Options>
            {/* <NavOption type="Try" isTablet={isTablet} /> */}
            <NavOption type="bell" isTablet={isTablet} isMobile={isMobile} />
            <NavOption
              type="cart"
              isTablet={isTablet}
              isMobile={isMobile}
              url={"/checkout"}
            />
          </Options>
        </Right>
      </Container>
      {/* <NavCategories /> */}
      {/* </NavsWrapper> */}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  font-family: "Helvetica", "Arial", sans-serif;
  background-color: white;
  /* background: green; */
  z-index: 10;
  /* margin: 0 auto; */
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 7%), 0 2px 4px rgb(0 0 0 / 5%);
  @media ${(props) => props.theme.tabletL} {
    height: unset;
  }
`;

const NavsWrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 13px;
  margin-right: 13px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1680px;
  margin-left: 13px;
  margin-right: 13px;
  margin: 24px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media ${(props) => props.theme.laptop} {
    margin-right: 20px;
    margin-left: 20px;
  }
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
`;
const SideLinks = styled.div`
  display: flex;
  margin-top: 5px;
  a {
    padding-right: -0.5rem;
    padding-left: 0.5rem;
    margin-right: 16px;
  }
`;
const LogoTag = styled.a`
  margin-right: 10px;
  color: rgba(0, 0, 0, 0.55);
  text-decoration: none;
  &:hover {
    color: rgba(0, 0, 0, 0.7);
  }
  &:focus {
    text-decoration: none;
    outline: 0;
    color: #708238;
  }
`;

const Logo = styled.img`
  width: 170px;
  color: red;
  display: none;
  @media ${(props) => props.theme.tabletL} {
    display: flex;
    font-size: 40px;
    justify-content: space-between;
  }
`;

const SmallLogo = styled.img`
  width: 35px;
  color: red;
  display: flex;
  @media ${(props) => props.theme.tabletL} {
    display: flex;
    font-size: 40px;
    justify-content: space-between;
    display: none;
  }
`;

const Options = styled.div`
  display: flex;
  transition: transform 0.15s ease-in-out;
  box-sizing: border-box;
  position: relative;
  flex-direction: row-reverse;
`;

const MenuIcon = styled.a`
  font-size: 30px;
  margin-right: 12px;
  display: flex;
  cursor: pointer;
  @media ${(props) => props.theme.tabletL} {
    display: none;
  }
`;
