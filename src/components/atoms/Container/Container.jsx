import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { MQ } from '../../../core/styles/Helpers';

const Container = styled.div(({
  theme,
}) => css`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;

  ${MQ('tablet')} {
    max-width: 704px;
  }

  ${MQ('desktop')} {
    max-width: 1200px;
  }
`);

export default Container;