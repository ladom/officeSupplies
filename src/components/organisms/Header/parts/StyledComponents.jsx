import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MQ, Typography } from '../../../../core/styles/Helpers';
import Container from '../../../atoms/Container/Container';
import { StyledNewPrice } from '../../../molecules/Price/Price';

export const StyledHeader = styled.header(({
  theme: {
    color,
  },
}) => css`
  width: 100%;
  margin-bottom: 24px;

  ${MQ('desktop')} {
    margin-bottom: 0;
  }
`);

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledTopBar = styled.div(({
  theme: {
    color,
  },
}) => css`
  width: 100%;
  background-color: ${color.white};
  padding: 12px 0;
  border-bottom: 1px solid ${color.yellow};
`);

export const StyledProductsNumber = styled.span(({
  theme: {
    color,
  },
}) => css`
  font-size: 20px;
  margin-left: 8px;
`);

export const StyledPrice = styled(StyledNewPrice)`
  margin: 0 12px;
`;

export const StyledCard = styled.div(({
  theme,
}) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`);

export const StyledNumber = styled.div(({
  theme: {
    color,
    text,
  },
}) => css`
  ${Typography(text.counter)};
  padding: 4px;
  border-radius: 2px;
  background-color: ${color.yellow};
  color: ${color.darkBlue};
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
  pointer-events: none;
`);

export const StyledNumberWrapper = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  outline: none;
`;

export const MobileMenu = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 32px;
  height: 24px;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Line = styled.span(({
  theme: {
    color,
  },
}) => css`
  display: block;
  width: 100%;
  height: 3px;
  background-color: ${color.lightBlue};
  border-radius: 1px;
`);