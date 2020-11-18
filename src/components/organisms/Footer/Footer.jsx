import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import { rawHTML } from '../../molecules/Products/Products';

import {
  StyledFooter,
  StyledItemLink,
  StyledList,
  StyledItem,
  StyledTitle,
  StyledDescription,
  StyledContainer,
  StyledSocialList,
  StyledIconWrapper,
} from './parts/StyledComponents';

const Footer = ({
  logo,
  description,
  bestsellers,
  social,
}) => (
  <StyledFooter>
    <StyledContainer>
      <div>
        <Logo {...logo} />
        <StyledDescription>
          {description}
        </StyledDescription>
      </div>
      <div>
        <StyledTitle>
          {bestsellers.heading}
        </StyledTitle>
        <StyledList>
          {bestsellers.items.map((item, index) => (
            <StyledItem key={`bestsellers-${index}`}>
              <StyledItemLink href={item.href}>
                {item.text}
              </StyledItemLink>
            </StyledItem>
          ))}
        </StyledList>
      </div>
      <div>
        <StyledTitle>
          {social.heading}
        </StyledTitle>
        <StyledSocialList>
          {social.links.map((item, index) => (
            <StyledItem key={`social-${index}`}>
              <StyledItemLink href={item.href}>
                <StyledIconWrapper
                  dangerouslySetInnerHTML={rawHTML(item.icon)}
                />
                {item.name}
              </StyledItemLink>
            </StyledItem>
          ))}
        </StyledSocialList>
      </div>
    </StyledContainer>
  </StyledFooter>
);

export default Footer;