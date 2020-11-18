import React from 'react';
import {
  StyledNavigation,
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledLink,
} from './parts/StyledComponents';

const MainNavigation = ({
  items,
}) => (
  <StyledNavigation>
    <StyledContainer>
      {(items && items.length > 0) && (
        <StyledList>
          {items.map((item, index) => (
            <StyledListItem key={`main-navigation-${index}`}>
              <StyledLink href={item.href}>
                {item.text}
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
      )}
    </StyledContainer>
  </StyledNavigation>
);

export default MainNavigation;
