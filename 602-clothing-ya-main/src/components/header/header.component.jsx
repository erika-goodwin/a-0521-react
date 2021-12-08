import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'

// import './header.styles.scss';
import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionLink,
} from './header.styles'
import logo from 'assets/images/ClothingYa.png'

import CartIcon from 'components/cart-icon/cart-icon.component'
import CartDropdown from 'components/cart-dropdown/cart-dropdown.component'
import { useAuthStatus } from 'hooks/useAuthStatus'

const Header = () => {
  const [hidden, setHidden] = useState(true)
  
  const { loggedIn } = useAuthStatus()
  const navigate = useNavigate()
  const auth = getAuth()

  const toggleCartHidden = () => {
    setHidden((prevState) => !prevState)
  }

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <img src={logo} alt='Logo' />
      </LogoContainer>

      <OptionContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        {loggedIn ? (
          <OptionLink
            as='div'
            onClick={() => {
              signOut(auth)
              navigate('/')
            }}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon toggleCartHidden={toggleCartHidden} />
      </OptionContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  )
}

export default Header
