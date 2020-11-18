import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MQ, Typography } from '../../../core/styles/Helpers';

const ButtonStyles = ({
    color,
  },
    isSecondary,
  ) => css`
  width: 100px;
  height: 40px;
  background-color: ${isSecondary ? color.button.secondary : color.button.primary};
  border-radius: 4px;
  box-shadow: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  outline: none;

  ${MQ('tablet')} {
    width: 150px;
  }

  ${MQ('desktop')} {
    width: 200px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledText = styled.span(({
  theme: {
    text,
    color,
  },
}) => css`
  ${Typography(text.button)};
  color: ${color.white};
`);

const StyledLink = styled.a(({
  theme,
  isSecondary,
}) => css`
  ${ButtonStyles(theme, isSecondary)};
`);

const StyledButton = styled.button(({
  theme,
  isSecondary,
}) => css`
  ${ButtonStyles(theme, isSecondary)};
`);

const Button = ({
  text,
  href,
  className,
  clickHandler,
  isSecondary,
}) => (
  <>
    {href ? (
      <StyledLink href={href} className={className} isSecondary={isSecondary}>
        <StyledText>
          {text}
        </StyledText>
      </StyledLink>
    ) : (
      <StyledButton className={className} onClick={clickHandler} isSecondary={isSecondary}>
        <StyledText>
          {text}
        </StyledText>
      </StyledButton>
    )}
  </>
);

export default Button;
