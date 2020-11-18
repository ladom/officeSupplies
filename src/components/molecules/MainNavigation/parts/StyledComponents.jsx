// import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MQ, Typography } from '../../../../core/styles/Helpers';
import Container from '../../../atoms/Container/Container';

export const StyledNavigation = styled.nav(({
  theme: {
    color,
  },
}) => css`
  width: 100%;
  height: 50px;
  background-color: ${color.white};
`);

export const StyledContainer = styled(Container)`
  height: 100%;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;

  ${MQ('desktop')} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const StyledListItem = styled.li(({
  theme: {
    color,
  },
}) => css`
  height: 100%;

  ${MQ('desktop')} {
    background-color: ${color.yellow};
    margin-right: 2px;
    position: relative;

    &:hover {
      cursor: pointer;

      &::after {
        content: '';
        display: block;
        height: 0;
        width: 0;
        border-left: 0 solid transparent;
        border-right: 32px solid transparent;
        border-top: 16px solid ${color.yellow};
        position: absolute;
        bottom: -16px;
        right: 0;
        opacity: .5;
      }
    }
  }
`);

export const StyledLink = styled.a(({
  theme: {
    text,
    color,
  },
}) => css`
  ${Typography(text.mainNavigation)};
  color: ${color.black};
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`);