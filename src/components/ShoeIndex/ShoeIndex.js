import React from 'react';
import styled from 'styled-components';

import { WEIGHTS, COLORS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <>
      <Header>
        <LeftColumn>
          <Breadcrumbs>
            <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
            <Breadcrumbs.Crumb href="/sale/shoes">
              Shoes
            </Breadcrumbs.Crumb>
          </Breadcrumbs>
          <Spacer size={36} />
          <ShoeSidebar />
        </LeftColumn>
        <HeaderMainColumn>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
        </HeaderMainColumn>
      </Header>
    </>
  );
};

const Header = styled.header`
  display: flex;
  align-items: baseline;
`;

const LeftColumn = styled.div`
  width: 248px;
`;

const HeaderMainColumn = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
