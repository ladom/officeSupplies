import React, { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MQ, VisuallyHidden } from '../../../core/styles/Helpers';
import { MagnifyGlass } from '../../../svg/dist/index';

const StyledInputWrapper = styled.div(({
  theme: {
    color,
  },
}) => css`
  width: 250px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${color.lightBlue};
  background-color: ${color.white};
`);

const StyledInput = styled.input(({
  theme: {
    color,
    layout: {
      spaces,
    },
  },
}) => css`
  width: 200px;
  height: 100%;
  padding: 0 ${spaces.mini};
  border: none;
  background-color: transparent;
  font-family: 'Lato';
  outline: none;

  &::placeholder {
    opacity: .5;
  }
`);

const StyledSearchButton = styled.a(({
  theme,
}) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  outline: none;
  text-decoration: none;

  ${MQ('desktop')} {
    &:hover {
      cursor: pointer;
    }
  }
`);

const StyledIcon = styled(MagnifyGlass)(({
  theme,
}) => css`
  width: 24px;
  height: 24px;
`);

const SearchInput = ({
  button,
  input,
}) => {
  const [buttonHref, setButtonHref] = useState('');
  const inputRef = useRef(null);
  const searchRef = useRef(null);
  const SearchHandler = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;

    if (inputValue && inputValue.length > 0) {
      setButtonHref(`${button.href}?query=${inputValue}`);
    }
  }

  useEffect(() => {
    if (buttonHref && buttonHref.length > 0) {
      window.location.href = buttonHref;
    }
  }, [buttonHref]);

  return (
    <StyledInputWrapper>
      <StyledInput
        type="text"
        placeholder={input.placeholder}
        aria-label={input.a11y}
        ref={inputRef}
      />
      <StyledSearchButton
        href={buttonHref}
        onClick={SearchHandler}
        ref={searchRef}
      >
        <VisuallyHidden>
          {button.text}
        </VisuallyHidden>
        <StyledIcon />
      </StyledSearchButton>
    </StyledInputWrapper>
  );
};

export default SearchInput;
