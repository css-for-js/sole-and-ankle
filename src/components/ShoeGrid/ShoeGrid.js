import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper key={shoe.slug}>
          <ShoeCard {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  /*
    Alternatively, if we can't use 'gap', we could set:

    margin: -16px;

    We'd also need to set this on the ShoeWrapper:

    margin: 16px;
  */
`;

const ShoeWrapper = styled.div`
  min-width: 275px;
  flex: 1;
`;

export default ShoeGrid;
