import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CartStateProvider } from './components/molecules/Cart/state/CartContext';
import GlobalStyles from '../src/core/styles/GlobalStyles';
import { theme } from '../src/core/styles/theme/main/Theme';
import Container from './components/atoms/Container/Container';
import Header from './components/organisms/Header/Header';
import Content from './components/organisms/Content/Content';
import Footer from './components/organisms/Footer/Footer';

const App = (props) => (
  <ThemeProvider theme={theme}>
    <CartStateProvider>
      <GlobalStyles />
      <div className="App">
        <Header {...props.header} />
        <Container>
          <Content {...props.content} />
        </Container>
        <Footer {...props.footer} />
      </div>
    </CartStateProvider>
  </ThemeProvider>
);

export default App;
