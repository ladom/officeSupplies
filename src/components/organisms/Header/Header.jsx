import React, { useEffect, useState } from 'react';
import { useCartContext } from '../../molecules/Cart/state/CartContext';
import { ACTION_SET_INITIAL_CART } from '../../molecules/Cart/state/CartReducer';
import useIsMobile from '../../../core/hooks/useIsMobile';

import Logo from '../../atoms/Logo/Logo';
import SearchInput from '../../atoms/SearchInput/SearchInput';
import CartIcon from '../../atoms/CartIcon/CartIcon';
import Button from '../../atoms/Button/Button';
import MainNavigation from '../../molecules/MainNavigation/MainNavigation';
import Cart from '../../molecules/Cart/Cart';
import {
  StyledHeader,
  StyledTopBar,
  StyledPrice,
  StyledContainer,
  StyledCard,
  StyledNumber,
  StyledNumberWrapper,
  MobileMenu,
  Line,
} from './parts/StyledComponents';

const Header = ({
  logo,
  search,
  cart,
  navigation,
}) => {
  const { isMobile } = useIsMobile();
  const [{ products }, dispatch] = useCartContext();
  const [isCartActive, setIsCartActive] = useState(false);

  const countPrice = (products) => {
    let Price = 0;
    products.forEach((item) => {
      Price += item.productPrice;
    });

    return Price;
  };

  const toggleCart = () => {
    setIsCartActive(!isCartActive);
  };

  useEffect(() => {
    dispatch({
      type: ACTION_SET_INITIAL_CART,
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <StyledHeader>
      {isMobile ? (
        <StyledTopBar>
          <StyledContainer>
            <MobileMenu>
              <Line />
              <Line />
              <Line />
            </MobileMenu>
            <Logo {...logo} isSmall={true} />
            <StyledNumberWrapper onClick={toggleCart}>
              <CartIcon {...cart} />
              {(products && products.length > 0) && (
                <StyledNumber>
                  {products.length}
                  &nbsp;
                  {cart.products.description}
                </StyledNumber>
              )}
            </StyledNumberWrapper>
          </StyledContainer>
        </StyledTopBar>
      ) : (
        <>
          <StyledTopBar>
            <StyledContainer>
              <Logo {...logo} />
              <SearchInput {...search} />
              <StyledCard>
                <StyledNumberWrapper onClick={toggleCart}>
                  <CartIcon {...cart} />
                  {(products && products.length > 0) && (
                    <StyledNumber>
                      {products.length}
                      &nbsp;
                      {cart.products.description}
                    </StyledNumber>
                  )}
                </StyledNumberWrapper>
                {(products && products.length > 0) && (
                  <>
                    <StyledPrice>
                      {countPrice(products)}
                      &nbsp;
                      {cart.price.currency}
                    </StyledPrice>
                    <Button {...cart.checkButton} clickHandler={toggleCart} />
                  </>
                )}
              </StyledCard>
            </StyledContainer>
          </StyledTopBar>
          <MainNavigation {...navigation} />
        </>
      )}
      {isCartActive && (
        <Cart totalPrice={countPrice(products)} {...cart} closeHandler={toggleCart} />
      )}
    </StyledHeader>
  )

};

export default Header;
