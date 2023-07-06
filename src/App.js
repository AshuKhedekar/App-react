import './App.css';
import React,{createContext} from 'react';
import { Form } from './components/Form';
export const ThemeContext = createContext(null);
function App() {

  return (
    <ThemeContext.Provider value='dark'>
      <Form/>
    </ThemeContext.Provider>
  );
}

export default App;
