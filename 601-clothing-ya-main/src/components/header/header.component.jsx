import React from 'react';
// import { Link } from 'react-router-dom';

// import './header.styles.scss';
import {HeaderContainer,LogoContainer,OptionContainer,OptionLink} from './header.styles'
import logo from 'assets/images/ClothingYa.png';

import CartIcon from 'components/cart-icon/cart-icon.component';
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component';


const Header = () => {
  const [hidden, setHidden] = React.useState(true)

  const toggleCartHidden = () => {
    setHidden(prevState => !prevState)
  }

  return(
  <HeaderContainer>
    <LogoContainer to='/'>
      <img src={logo} alt="Logo" />
    </LogoContainer>

    <OptionContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/signin'>
        SIGN IN
      </OptionLink>

      <CartIcon toggleCartHidden={toggleCartHidden} />
    </OptionContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
)};

export default Header;
