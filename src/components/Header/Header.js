import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <ContainerMax>
          <Logo />
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
        </ContainerMax>
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const ContainerMax = styled.div`
  max-width: 1440px;
  margin-inline: auto;
  // display
  display: flex;
  align-items: center;
  height: 72px;
  padding: 0 32px;
`;

const Nav = styled.nav`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  margin-left: 48px;
  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
