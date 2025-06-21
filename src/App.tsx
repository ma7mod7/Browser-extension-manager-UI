import './App.css'
import { useState, useEffect } from "react";

import Header from './Header/Header'
import ExtensionsList from './ExtensionsList/ExtensionsList'
import FilteredCompo from './FilteredCompo';




function App() {
  const [filter,setFilter]=useState("all");


  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <>
      <div className='container'>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <ExtensionsList  setFilter={setFilter}  />
        <div className='Exes'>
          {<FilteredCompo filter={filter}/>}
        </div>
      </div>
    </>
  )
}

export default App
