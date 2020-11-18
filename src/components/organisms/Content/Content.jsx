import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MQ } from '../../../core/styles/Helpers';
import SideNavigation from '../../molecules/SideNavigation/SideNavigation';
import Products from '../../molecules/Products/Products';

const StyledContent = styled.div(({
  theme,
}) => css`
  display: grid;
  grid-template-columns: 100%;

  ${MQ('desktop')} {
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 20px;
    padding: 40px 0;
  }
`);

const Content = ({
  sideNavigation,
  products,
  buyButton,
  readMoreButton,
  inspirations,
}) => (
  <StyledContent>
    <SideNavigation sideNavigation={sideNavigation} />
    <Products
      products={products}
      buyButton={buyButton}
      readMoreButton={readMoreButton}
      inspirations={inspirations}
    />
  </StyledContent>
);

export default Content;