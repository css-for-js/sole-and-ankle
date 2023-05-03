import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <HeaderContainer>
      <SuperHeader />
      <MainHeader>
        <Spacer>
          <Logo />
        </Spacer>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Spacer />
      </MainHeader>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  z-index: 2;
`;

const MainHeader = styled.div`
  padding: 0 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  align-items: center;
  height: 72px;
  background-color: ${COLORS.white};
  opacity: 0.9;
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  justify-content: center;
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Spacer = styled.div`
  width: 160px;
`;

export default Header;
