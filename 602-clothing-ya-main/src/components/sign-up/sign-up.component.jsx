import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

import { SignUpContainer, SignUpTitle } from './sign-up.styles'

import CustomButton from 'components/custom-button/custom-button.component'
import FormInput from 'components/form-input/form-input.component'
import { createUserProfileDocument } from 'firebase/firebase.helper'

const SignUp = () => {
  const [user, setUser] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const auth = getAuth()
  
  const handleSubmit = async (event) => {
    event.preventDefault()

    const { displayName, email, password, confirmPassword } = user

    if (password !== confirmPassword) {
      alert('Passwords dont match')
      return
    }

    // handle with firebase
    try{
      const { user } = await createUserWithEmailAndPassword(auth, email, password)
      await createUserProfileDocument(user, { displayName })

      setUser({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    }catch(error){
      console.log(error);
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
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          handleChange={handleChange}
          name='displayName'
          type='text'
          label='Display Name'
          value={user.displayName || ''}
          required
        />
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
        <FormInput
          handleChange={handleChange}
          name='confirmPassword'
          type='password'
          label='Confirm Password'
          value={user.confirmPassword || ''}
          required
        />

        <CustomButton type='submit'>Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  )
}

export default SignUp
