import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '../../../../core/styles/Helpers';
// import { MQ, Typography } from '../../../../core/styles/Helpers';
// import Container from '../../../atoms/Container/Container';

export const StyledNavigation = styled.nav(({
  theme,
}) => css`
  width: 100%;
`);

export const StyledList = styled.ul(({
  theme,
}) => css`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
`);

export const StyledListItem = styled.li(({
  theme: {
    color,
  },
}) => css`
  width: 100%;
  height: 32px;
  background-color: ${color.yellow};
  margin-bottom: 2px;
`);

export const StyledLink = styled.a(({
  theme: {
    color,
    text,
  },
}) => css`
  ${Typography(text.sideNavigation)};
  color: ${color.black};
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 8px;

  &:hover {
    cursor: pointer;

    &::after {
      content: '';
      display: block;
      height: 0;
      width: 0;
      border-top: 24px solid transparent;
      border-bottom: 0 solid transparent;
      border-left: 12px solid ${color.yellow};
      position: absolute;
      right: -12px;
      top: 0;
      opacity: .5;
    }
  }
`);