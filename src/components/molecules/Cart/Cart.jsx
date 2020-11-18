import React from 'react';
import { VisuallyHidden } from '../../../core/styles/Helpers';
import { useCartContext } from './state/CartContext';
import { StyledHeading } from '../Products/parts/StyledComponents';
import { StyledNewPrice } from '../Price/Price';

import {
  StyledOverlay,
  StyledCart,
  StyledCartWrapper,
  StyledList,
  StyledListItem,
  StyledClose,
  StyledButton,
  StyledContent,
} from './parts/StyledComponents';

const Cart = ({
  price,
  checkButton,
  description,
  emptyText,
  closeHandler,
  closeText,
  checkoutHandler,
  totalPrice,
}) => {
  const [{ products }] = useCartContext();

  const closeCart = (event) => {
    if (event.target.dataset.overlay === 'cart' || event.target.dataset.close === 'close') {
      closeHandler();
    }
  };

  return (
    <StyledOverlay onClick={closeCart} data-overlay="cart">
      <StyledCartWrapper>
        <StyledCart>
          <StyledClose onClick={closeCart} data-close="close">
            <VisuallyHidden>
              {closeText}
            </VisuallyHidden>
          </StyledClose>
          <StyledHeading>
            {description}
          </StyledHeading>
          {products.length > 0 ? (
            <StyledContent>
              Total products {products.length}
              <br/>
              <StyledNewPrice>
                Total price
                &nbsp;
                {totalPrice}
              </StyledNewPrice>
              <StyledList>
                {products.map((item, index) => (
                  <StyledListItem key={`product-${index}`}>
                    <div>
                      {item.productName}
                      {item.variant && (
                        <>
                          &nbsp;
                          {item.variant}
                        </>
                      )}
                    </div>
                    <StyledNewPrice>
                      {item.productPrice}
                      &nbsp;
                      {price.currency}
                    </StyledNewPrice>
                  </StyledListItem>
                ))}
              </StyledList>
              <StyledButton
                text={checkButton.text}
                clickHandler={checkoutHandler}
              />
            </StyledContent>
          ) : (
            <p>
              {emptyText}
            </p>
          )}
        </StyledCart>
      </StyledCartWrapper>
    </StyledOverlay>
  );
};

export default Cart;