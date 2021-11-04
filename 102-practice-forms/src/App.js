import React, { useState, useRef } from 'react'

function App() {
  const [nameInput, setNameInput] = useState('')
  const inputRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(nameInput)
    console.log(inputRef.current.value)
  }

  const handleInputChange = (e) => {
    setNameInput(e.target.value)
  }

  return (
    <div className="App">
      <h1>React Practice Forms</h1>
      <h2>Event, Forms and Ref</h2>

      <br />

      <form onSubmit={handleSubmit}>
        <div className="group">
          <input 
            type="text" 
            onBlur={() => console.log('Blurred')} 
            onFocus={() => console.log('Focused')}
            // onChange={() => console.log('Changed')}
            // onChange={handleInputChange}
            // onChange={(e) => setNameInput(e.target.value)}
            ref={inputRef}
          />
        </div>
      </form>
    </div>
  );
}

export default App;