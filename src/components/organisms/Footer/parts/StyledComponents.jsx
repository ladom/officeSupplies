import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MQ, Typography } from '../../../../core/styles/Helpers';
import Container from '../../../atoms/Container/Container';

export const StyledFooter = styled.footer(({
  theme: {
    color,
  },
}) => css`
  background-color: ${color.yellow};
  width: 100%;
  padding: 40px 0;
  margin-top: 24px;
`);

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;

  & > *:nth-child(1),
  & > *:nth-child(2),
  & > *:nth-child(3) {
      width: 100%;
    }

  ${MQ('desktop')} {
    flex-direction: row;

    & > *:nth-child(1) {
      width: 48%;
      margin-right: 2%;
    }

    & > *:nth-child(2),
    & > *:nth-child(3) {
      width: 24%;
    }

    & > *:nth-child(2) {
      margin-right: 2%
    }
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  ${MQ('desktop')} {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
  }
`;

export const StyledItem = styled.li`
  width: 100%;
  padding: 8px 0;
`;

export const StyledItemLink = styled.a(({
  theme: {
    text,
    color,
  },
}) => css`
  ${Typography(text.sideNavigation)};
  color: ${color.black};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`);

export const StyledTitle = styled.h3(({
  theme: {
    color,
    text,
  },
}) => css`
  ${Typography(text.inspirationTitle)};
  color: ${color.darkBlue};
`);

export const StyledDescription = styled.p(({
  theme: {
    text,
  },
}) => css`
  ${Typography(text.inspirationText)};
  padding: 8px 0;
`);

export const StyledSocialList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledIconWrapper = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 12px;
`;