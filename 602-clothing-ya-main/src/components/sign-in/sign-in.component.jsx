import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signInWithEmailAndPassword } from 'firebase/auth'

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './sign-in.styles'

import CustomButton from 'components/custom-button/custom-button.component'
import FormInput from 'components/form-input/form-input.component'
import { auth, signInWithGoogle } from 'firebase/firebase.util'

const SignIn = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = async (event) => {
    event.preventDefault()

    // handle with firebase

    try {
      const userCredential = await signInWithEmailAndPassword(auth, user.email, user.password)
      
      if(userCredential){
        let from = location.state?.from?.pathname || '/'
        navigate(from, { replace: true })
      }
    }catch(error){
      console.log(error.message);
    }
  }

  const handleChange = (event) => {
    const { value, name } = event.target

    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name='email'
          type='email'
          label='Email'
          value={user.email || ''}
          required
        />
        <FormInput
          handleChange={handleChange}
          name='password'
          type='password'
          label='Password'
          value={user.password || ''}
          required
        />

        <ButtonsBarContainer>
          <CustomButton type='submit'>Sign In</CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  )
}

export default SignIn
