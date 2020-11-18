import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '../../../core/styles/Helpers';
import { ArrowDown } from '../../../svg/dist/index';

const StyledSelectComponent = styled.div(({
  theme: {
    color,
  },
}) => css`
  display: flex;
  align-items: center;
  padding: 6px;
  border: 1px solid ${color.lightBlue};
`);

const StyledSelect = styled.select(({
  theme: {
    text,
  },
}) => css`
  appearance: none;
  border: none;
  border-radius: 0;
  background: 0 0;
  box-shadow: none;
  cursor: pointer;
  flex: 1 1 auto;
  ${Typography(text.tiny)};
  outline: none;

  &:-ms-expand {
    display: none;
  }
`);

const Select = ({
  className,
  options,
  defaultValue,
  onChange,
}) => (
  <StyledSelectComponent
    className={className}
  >
    <StyledSelect data-testid="select" value={defaultValue} onChange={onChange}>
      {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
    </StyledSelect>
    <ArrowDown />
  </StyledSelectComponent>
);

export default Select;
