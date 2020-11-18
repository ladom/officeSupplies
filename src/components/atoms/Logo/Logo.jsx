import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { OfficeSupplies } from '../../../svg/dist/index';

const StyledLink = styled.a(({
  isSmall,
}) => css`
  width: 200px;
  height: 50px;
  display: block;

  ${isSmall && css`
    width: 100px;
    height: 25px;
  `}
`);

const Logo = ({
  href,
  isSmall,
}) => (
  <StyledLink href={href} isSmall={isSmall}>
    <OfficeSupplies />
  </StyledLink>
);

export default Logo;
