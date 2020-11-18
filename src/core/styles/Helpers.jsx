import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { hideVisually } from 'polished';

import Breakpoint from './Breakpoints.config';

const VisuallyHidden = styled.span`
  ${hideVisually()};
`;

const MQ = (n) => {
  const bpArray = Object.keys(Breakpoint).map((key) => [key, Breakpoint[key]]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};

const TypographySettings = (settings) => css`
  ${settings.fontFamily && `font-family: ${settings.fontFamily};`}
  ${settings.fontStyle && `font-style: ${settings.fontStyle};`}
  ${settings.fontSize && `font-size: ${settings.fontSize}px`};
  ${settings.fontWeight && `font-weight: ${settings.fontWeight}`};
  ${settings.lineHeight && `line-height: ${settings.lineHeight}`};
  ${settings.margin && `margin: ${settings.margin}`};
  ${settings.textTransform && `text-transform: ${settings.textTransform}`};
  ${settings.textAlign && `text-align: ${settings.textAlign}`};
  ${settings.textDecoration && `text-decoration: ${settings.textDecoration}`};
`;

const Typography = (settings) => css`
  ${TypographySettings(settings)};
  ${settings.tablet ? css`
    ${MQ('tablet')} {
      ${TypographySettings(settings.tablet)};
    }
  ` : null}
  ${settings.desktop ? css`
    ${MQ('desktop')} {
      ${TypographySettings(settings.desktop)};
    }
  ` : null}
`;

export {
  VisuallyHidden,
  Typography,
  MQ,
};
