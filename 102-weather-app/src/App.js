import React, {useState} from 'react'

function App() {

  const [nameInput, setNameInput] = useState('')


  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(nameInput);
  }

  const handleInputChange = (e) =>{
    console.log(e.target.value);
  }


  return (
    <div className="App">
      <h1>React Practice Forms</h1>
    <h2>Event, Form and Ref</h2>

    <br />


    <form onSubmit={}>
      <div className='group'>  
        <input 
        type='text' 
        onBlur ={()=> console.log('Blurred')}
        onFocus ={()=> console.log('Focused')}
        // onChanged ={()=> console.log('Changed')} 
        onChanged ={handleInputChange} 
        />
       </div>
    </form>
    </div>
  );
}

export default App;
