import React from "react";

// import './menu-item.styles.scss';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
} from "../menu-item/manu-item.style";

const MenuItem = ({ title, imageUrl, size = 1 }) => (
  <MenuItemContainer size={size}>
    <BackgroundImageContainer imageUrl={imageUrl} />
    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default MenuItem;
