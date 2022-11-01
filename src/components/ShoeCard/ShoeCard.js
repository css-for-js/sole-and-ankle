import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <Price variant={variant}>{formatPrice(price)}</Price>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          <SalePrice variant={variant}>{formatPrice(salePrice)}</SalePrice>
        </Row>
        <Badge variant={variant}>{variant === "new-release" ? "Just released!" : "Sale"}</Badge>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  flex: 1 1 100%;

  @media (min-width: 900px) {
    flex: 1 1 300px;
    max-width: none;
  }

  @media (min-width: 1632px) {
    flex: 1 1 300px;
    max-width: 320px;
  }

  @media (min-width: 1899px) {
    flex: 1 1 20%;
    max-width: 367px;
  }

`;

const Wrapper = styled.article` 
  position: relative;
`;

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 16px 16px 4px 4px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  text-decoration: ${p => p.variant === 'on-sale' && 'line-through'};
  color: ${p => p.variant === 'on-sale' && COLORS.gray[700]};
`;


const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
  display: ${p => p.variant !== 'on-sale' && 'none'};
`;

const Badge = styled.div`
  display: ${p => p.variant === 'default' && 'none'};
  font-size: 14px;
  top: 8px;
  right: -4px;
  position: absolute;
  padding: 4px 8px;
  background-color: ${p => p.variant === 'new-release' ? COLORS.secondary : COLORS.primary};
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.medium};
  border-radius: 2px;
`

export default ShoeCard;
