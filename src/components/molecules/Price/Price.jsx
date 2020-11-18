import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '../../../core/styles/Helpers';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

export const StyledNewPrice = styled.span(({
  theme: {
    text,
    color,
  },
}) => css`
  ${Typography(text.newPrice)};
  color: ${color.darkBlue};
`);

const StyledOldPrice = styled.span(({
  theme: {
    text,
    color,
  },
}) => css`
  ${Typography(text.oldPrice)};
  color: ${color.black};
  opacity: .5;
`);

const Price = ({
  newPrice,
  oldPrice,
  currency,
}) => (
  <StyledWrapper>
    <StyledNewPrice>
      {newPrice}
      &nbsp;
      {currency}
    </StyledNewPrice>
    <StyledOldPrice>
      {oldPrice}
      &nbsp;
      {currency}
    </StyledOldPrice>
  </StyledWrapper>
);

export default Price;