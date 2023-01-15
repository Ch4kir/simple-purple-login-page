import './style.css';
import Form from './Form';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme =()=>{
    setTheme((curr)=>(curr === "light" ? "dark" :"light"))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}} >
    <div className="App" id={theme}>
      <Form/>
      <div className="switch">
        <label> {theme === "light" ? "Light mode" : "Dark mode"} </label>
      <ReactSwitch 
      onColor="#38004c"
      onHandleColor="#600780"
      handleDiameter={30}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={20}
      width={48}
      className="react-switch"
      id="material-switch"
      onChange={toggleTheme} 
      checked={theme==="dark"}
      />
      </div>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
