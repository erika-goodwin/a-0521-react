import React, { createContext, useContext } from 'react'

//example context object
// const ThemeContext = createContext("dark")

// //usage with context consumer
// const Button = () => {
//     return (
//         <ThemeContext.Consumer>
//             {theme => <button className={theme}>Check me out</button>}
//         </ThemeContext.Consumer>
//     )
// }

// const ButtonHooks = () => {
//     const theme = useContext(ThemeContext)
//     return (
//         <button className={theme}>Amazing Button</button>
//     )
// }


import { ThemeContext } from './sampleContext'

const DemoUseContext = () => {
    const theme = useContext(ThemeContext)

    return(
        <div style={{
            background: theme === 'dark' ? 'black' : 'yellow',
            color: theme === 'dark' ? 'white' : 'red',
            width: '100%',
            minHeight: '200px'
        }}>

            {'The theme here is ' + theme}

        </div>
    )
}

export default DemoUseContext