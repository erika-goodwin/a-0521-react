import React, { useState, useEffect, createRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'

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
import { resetCart } from 'redux/cart/cart.actions'

const Header = () => {
  const [hidden, setHidden] = useState(true)

  const { loggedIn } = useAuthStatus()
  const navigate = useNavigate()
  const auth = getAuth()
  const ref = createRef()
  const dispatch = useDispatch()

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (!hidden && ref.current && !ref.current.contains(e.target)) {
        setHidden(true)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [hidden, ref])

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
              dispatch(resetCart())
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
      {hidden ? null : <CartDropdown ref={ref} />}
    </HeaderContainer>
  )
}

export default Header
