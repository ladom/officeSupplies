import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MQ, Typography } from '../../../../core/styles/Helpers';

export const StyledProduct = styled.article(({
  theme,
}) => css`
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 1fr;
  grid-row-gap: 16px;
  grid-template-areas:
    "price"
    "image"
    "description"
    "inspiration";

  ${MQ('tablet')} {
    grid-template-columns: 100%;
    margin: 0 auto;
  }

  ${MQ('desktop')} {
    width: 100%;
    max-width: none;
    margin: 0;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-template-rows: 150px 1fr;
    grid-auto-rows: auto;
    grid-template-areas:
      "image price price"
      "image description description"
      "inspiration inspiration inspiration";
  }
`);

export const StyledInspiration = styled.div(({
  theme: {
    color,
  },
}) => css`
  background-color: ${color.white};
  border: 1px solid ${color.yellow};
  padding: 20px;
`);

export const StyledLeftColumn = styled.div`
  grid-area: image;
  grid-column: 2fr ;
`;

export const StyledImageWrapper = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 0;
  padding-top: 75%;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* TODO: polyfill for IE11 */
`;

export const StyledProductImages = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 12px;
  margin-top: 12px;
`;

export const StyledProductImageWrapper = styled.li`
  width: 100%;

  & * {
    pointer-events: none;
  }

  ${MQ('desktop')} {
    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledPrice = styled.div`
  grid-area: price;
`;

export const StyledDescription = styled.div(({
  isActive,
  height,
  theme: {
    text,
  },
}) => css`
  ${Typography(text.productDescription)};
  height: ${isActive ? `${height}px` : '200px'};
  overflow: hidden;
  transition: height .3s ease-in-out;
  margin-bottom: 12px;
`);

export const StyledDescriptionWrapper = styled.div`
  grid-area: description;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${MQ('desktop')} {
    margin-bottom: 40px;
  }
`;

export const StyledSelectWrapper = styled.div`
  width: 150px;
  margin: 12px 0;

  ${MQ('tablet')} {
    margin: 0;
  }
`;

export const StyledHeading = styled.h2(({
  theme: {
    text,
    color,
    layout: {
      spaces,
    },
  },
}) => css`
  ${Typography(text.productTitle)};
  color: ${color.darkBlue};
  margin: 0 0 ${spaces.regular};
`);

export const StyledPriceWrapper = styled.div(({
  theme: {
    color,
  },
}) => css`
  background-color: ${color.white};
  border: 1px solid ${color.yellow};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  ${MQ('tablet')} {
    flex-direction: row;
  }
`);

export const StyledInspirationTitle = styled.h3(({
  theme: {
    text,
    color,
    layout: {
      spaces,
    },
  },
}) => css`
  ${Typography(text.inspirationTitle)};
  color: ${color.lightBlue};
  margin: 0 0 ${spaces.regular};
`);

export const StyledInspirationText = styled.p(({
  theme: {
    text,
    color,
  },
}) => css`
  ${Typography(text.inspirationText)};
  color: ${color.black};
  margin: 0;
`);