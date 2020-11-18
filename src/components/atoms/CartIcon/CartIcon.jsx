import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MQ, Typography, VisuallyHidden } from '../../../core/styles/Helpers';
import { Cart } from '../../../svg/dist/index';

const StyledCartIcon = styled.button(({
  theme,
}) => css`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  outline: none;

  ${MQ('desktop')} {
    &:hover {
      cursor: pointer;
    }
  }
`);

const StyledSvg = styled(Cart)`
  width: 100%;
  height: 100%;
`;

const CartIcon = ({ a11y }) => {

  return (
    <StyledCartIcon>
      <VisuallyHidden>
        {a11y}
      </VisuallyHidden>
      <StyledSvg />
    </StyledCartIcon>
  );
};

export default CartIcon;
