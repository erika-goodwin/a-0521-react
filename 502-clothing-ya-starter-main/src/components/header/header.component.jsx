import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';
import logo from 'assets/images/ClothingYa.png';

import CartIcon from 'components/cart-icon/cart-icon.component';
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component';



const Header = () => {
  const [hidden, setHidden] = React.useState(true)

  const toggleCartHidden = () => {
    setHidden(prevState => !prevState)
  }

  return(
  <div className='header'>
    <Link className='logo-container' to='/'>
      <img src={logo} alt="Logo" />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/signin'>
        SIGN IN
      </Link>

      <CartIcon toggleCartHidden={toggleCartHidden} />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
)};

export default Header;
