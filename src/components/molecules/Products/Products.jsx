import React, { useState, useEffect } from 'react';
import { useCartContext } from '../../molecules/Cart/state/CartContext';
import { ACTION_ADD_TO_CART } from '../../molecules/Cart/state/CartReducer';
import Select from '../../atoms/Select/Select';
import Button from '../../atoms/Button/Button';
import Price from '../Price/Price';
import {
  StyledProduct,
  StyledImageWrapper,
  StyledImage,
  StyledLeftColumn,
  StyledSelectWrapper,
  StyledProductImageWrapper,
  StyledProductImages,
  StyledPrice,
  StyledDescription,
  StyledDescriptionWrapper,
  StyledHeading,
  StyledPriceWrapper,
  StyledInspiration,
  StyledInspirationTitle,
  StyledInspirationText,
} from './parts/StyledComponents';
export const rawHTML = (html) => ({ __html: html });

const Products = ({
  products,
  buyButton,
  readMoreButton,
  inspirations,
}) => {
  const [activeProduct, setActiveProduct] = useState(products[0]);
  const [activeVariant, setActiveVariant] = useState(products[0].variants[0].value);
  const [contentHeight, setContentHeight] = useState(200);
  const [variantForCart, setVariantForCart] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [, dispatch] = useCartContext();
  const inspirationsToDisplay = inspirations.length > 3 ? inspirations.slice(0, 3) : inspirations;
  let contentElement;

  const imageClickHandler = (event) => {
    const newTarget = activeProduct.id !== event.target.id ? products.find((item) => item.id === event.target.id) : activeProduct;

    setActiveProduct(newTarget);
    setActiveVariant(newTarget.variants && newTarget.variants.length > 0 && newTarget.variants[0].value);
    setIsActive(false);
  };

  const changeSelectHandler = (event) => {
    setActiveVariant(event.target.value);
  };

  const refCallback = (element) => {
    if (element) {
      contentElement = element;
      setContentHeight(element.scrollHeight);
    }
  };

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const buyButtonTrigger = (product, variant) => {
    const chosenProduct = {
      productName: product.name,
      productPrice: product.price.newPrice,
      variant: variant,
      productId: product.id,
    }
    dispatch({
      type: ACTION_ADD_TO_CART,
      payload: {
        product: chosenProduct,
      },
    });
  };

  useEffect(() => {
    if (isActive) {
      setContentHeight(contentElement.scrollHeight);
    }
  }, [isActive]); // eslint-disable-line

  useEffect(() => {
    setVariantForCart(activeVariant);
  }, [activeVariant]);

  useEffect(() => {
    console.log(variantForCart)
  }, [variantForCart]);

  return (
    <StyledProduct>
      <StyledLeftColumn>
        <StyledImageWrapper>
          <StyledImage
            src={activeProduct.image.src}
            alt={activeProduct.image.alt}
          />
        </StyledImageWrapper>
        <StyledProductImages>
          {products.map((product) => (
            <StyledProductImageWrapper
              key={product.id}
              id={product.id}
              role="button"
              onClick={imageClickHandler}
            >
              <StyledImageWrapper>
                <StyledImage
                  src={product.image.src}
                  alt={product.image.alt}
                />
              </StyledImageWrapper>
            </StyledProductImageWrapper>
          ))}
        </StyledProductImages>
      </StyledLeftColumn>
      <StyledPrice>
        <StyledHeading>
          {activeProduct.name}
        </StyledHeading>
        <StyledPriceWrapper>
          <Price {...activeProduct.price} />
          {activeVariant && (
            <StyledSelectWrapper>
              <Select
                options={activeProduct.variants}
                defaultValue={variantForCart}
                onChange={changeSelectHandler}
              />
            </StyledSelectWrapper>
          )}
          <Button
            clickHandler={() => {
              buyButtonTrigger(activeProduct, activeVariant);
            }}
            text={buyButton.text}
          />
        </StyledPriceWrapper>
      </StyledPrice>
      <StyledDescriptionWrapper>
        <StyledDescription
          dangerouslySetInnerHTML={rawHTML(activeProduct.description)}
          ref={refCallback}
          isActive={isActive}
          height={contentHeight}
        />
        <Button
          clickHandler={toggleActive}
          text={isActive ? readMoreButton.lessText : readMoreButton.moreText}
          isSecondary={true}
        />
      </StyledDescriptionWrapper>
      {inspirationsToDisplay.map((item, index) => (
        <StyledInspiration key={`inspiration-${index}`}>
          <StyledInspirationTitle>
            {item.title}
          </StyledInspirationTitle>
          <StyledInspirationText>
            {item.text}
          </StyledInspirationText>
        </StyledInspiration>
      ))}
    </StyledProduct>
  );
};

export default Products;