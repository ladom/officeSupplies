import React from 'react';
import useIsMobile from '../../../core/hooks/useIsMobile';
import {
  StyledNavigation,
  StyledList,
  StyledListItem,
  StyledLink,
} from './parts/StyledComponents';

const SideNavigation = ({ sideNavigation }) => {
  const { isMobile } = useIsMobile();

  if (isMobile) {
    return null;
  }

  return (
    <StyledNavigation>
      {(sideNavigation && sideNavigation.length > 0) && (
        <StyledList>
          {sideNavigation.map((item, index) => (
            <StyledListItem key={`side-navigation-${index}`}>
              <StyledLink href={item.href}>
                {item.text}
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
      )}
    </StyledNavigation>
  );
};

export default SideNavigation;