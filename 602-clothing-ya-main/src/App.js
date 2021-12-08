import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { useAuthStatus } from 'hooks/useAuthStatus'

import './App.scss'

import HomePage from 'pages/homepage/homepage.component'
import Header from 'components/header/header.component'
import ShopPage from 'pages/shop/shop.component'
import SignInAndSignUp from 'pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import PrivateRoute from 'components/routes/PrivateRoute.route'
import CheckoutPage from 'pages/checkout/checkout-page.component'

function App() {
  const { loggedIn } = useAuthStatus()
  return (
    <div className='App'>
      <Header loggedIn={loggedIn} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/checkout'
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/shop/*'
          element={
            <PrivateRoute>
              <ShopPage />
            </PrivateRoute>
          }
        />
        <Route path='/signin' element={<SignInAndSignUp />} />
      </Routes>
    </div>
  )
}

export default App
