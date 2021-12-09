import React from 'react'
import { useNavigate } from 'react-router'

// import './menu-item.styles.scss';
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle,
} from './menu-item.styles'

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate()
  return(
  <MenuItemContainer size={size} id={title} onClick={() => navigate(`${linkUrl}`)}>
    <BackgroundImageContainer imageUrl={imageUrl} id='bgImage' />
    <ContentContainer id='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
)}

export default MenuItem
