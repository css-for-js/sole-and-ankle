import React from 'react';
import styled from 'styled-components';

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

  return (
    <Wrapper>
      <ImageWrapper>
        <Image alt="" src={imageSrc} />
        <ImageSizer />
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  flex: 1;
  min-width: 325px;
  max-width: 550px;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageSizer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 90%;
`;

export default ShoeCard;
