import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS } from '../../constants';
import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import Logo from '../Logo';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <MarketingMessage>
          Free shipping on domestic orders over $75!
        </MarketingMessage>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </SuperHeader>
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  padding: 0px 32px;
  height: 40px;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

const MainHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  height: 72px;
  padding: 0 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Side = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
`;

const Nav = styled.nav`
  display: flex;
  margin: 0 48px;
  gap: 48px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  line-height: 72px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
