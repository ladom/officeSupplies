import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MQ, Typography } from '../../../../core/styles/Helpers';
import Button from '../../../atoms/Button/Button';

export const StyledOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(160, 13, 91, .5);
  z-index: 2;
`;

export const StyledCartWrapper = styled.div`
  width: 100%;
  max-height: 100%;
  overflow-y: auto;

  ${MQ('desktop')} {
    max-width: 80vw;
    max-height: 80vh;
  }
`;

export const StyledCart = styled.div(({
  theme: {
    color,
    text,
  },
}) => css`
  ${Typography(text.cart)};
  width: 100%;
  height: 100%;
  background-color: ${color.white};
  padding: 12px;
  position: relative;

  ${MQ('desktop')} {
    padding: 24px;
  }
`);

export const StyledList = styled.ul(({
  theme: {
    text,
  },
}) => css`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;

  ${MQ('desktop')} {
    width: 75%;
  }
`);

export const StyledListItem = styled.li(({
  theme: {
    color,
  }
}) => css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 24px 0;
  border-bottom: 1px solid ${color.yellow};

  &:last-of-type {
    border-bottom: none;
  }
`);

export const StyledClose = styled.button(({
  theme: {
    color,
    layout: {
      spaces,
    },
  },
}) => css`
  width: ${spaces.big};
  height: ${spaces.big};
  background-color: transparent;
  box-shadow: none;
  outline: none;
  position: absolute;
  right: 12px;
  top: 12px;
  border: none;

  ${MQ('desktop')} {
    transition: transform .3s ease-in-out;

    &:hover {
      cursor: pointer;
      transform: scale(1.2);
    }
  }

  &::before,
  &::after {
    content: '';
    display: block;
    width: 26px;
    height: 2px;
    border-radius: 1px;
    background-color: ${color.darkBlue};
    position: absolute;
    pointer-events: none;
    top: 12px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`);

export const StyledButton = styled(Button)`
  align-self: flex-end;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
`;