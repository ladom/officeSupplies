import React from 'react';

import { Global, css } from '@emotion/react';
import { normalize } from 'polished';
import { theme } from './theme/main/Theme';

const GlobalStyles = () => (
  <Global
    styles={() => css`
      ${normalize()}
      @font-face {
        font-family: 'Lato';
        src: url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
        font-weight: 300;
      }
      @font-face {
        font-family: 'Lato';
        src: url('https://fonts.googleapis.com/css2?family=Lato:wght@400&display=swap');
        font-weight: 400;
      }
      @font-face {
        font-family: 'Lato';
        src: url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');
        font-weight: 700;
      }

      * {
        box-sizing: border-box;
      }

      body: {
        font-family: ${theme.text.bodyText.fontFamily}
      }
    `}
  />
);

export default GlobalStyles;
