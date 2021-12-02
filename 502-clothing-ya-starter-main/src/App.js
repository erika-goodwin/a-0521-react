import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.scss'

import HomePage from 'pages/homepage/homepage.component'
import Header from 'components/header/header.component'

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
