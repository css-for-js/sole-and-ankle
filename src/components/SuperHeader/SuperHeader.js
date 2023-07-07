import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import Spacer from "../Spacer";

const SuperHeader = () => {
  return (
    <Wrapper>
      <ContainerMax>
        <MarketingMessage>
          Free shipping on domestic orders over $75!
        </MarketingMessage>
        <SearchInput />
        <Spacer size={24} />
        <HelpLink href="/help">Help</HelpLink>
        <Spacer size={24} />
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </ContainerMax>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  // gap: 24px;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
`;

const ContainerMax = styled.div`
  max-width: 1440px;
  margin-inline: auto;
  padding: 0 32px;
  // display
  display: flex;
  align-items: center;
  height: 40px;
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

export default SuperHeader;
