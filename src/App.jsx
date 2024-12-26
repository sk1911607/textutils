import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import Textform from './Components/Textform'
import './App.css'
import Alert from './Components/Alert'
import About from './Components/About'
import {
  BrowserRouter,
  Route,
 Routes
} from "react-router-dom";

function App() {
 const [alert, setAlert]= useState(null);
    const showAlert=(message, type)=>{
      setAlert({
        message:message,
        type:type,
    })

    }


  const [mode, setMode]=useState('light')
    const changemode=()=>{
      if (mode==='light') {
        setMode('dark')
        document.body.style.background='#020420'
        showAlert('  Dark mode has been enabled','success')
      }else{
          setMode('light')
                document.body.style.background='white'
                showAlert('  Light mode has been enabled', 'success')
      }
    }
    setTimeout(()=>{
      setAlert(null)},3000
    );

  return (
    <>
    <BrowserRouter>
     <Navbar title='TextUtils' abt='About' mode={mode} changemode={changemode}/>
     <Alert alert={alert}/>
     <Routes>
      <Route exact path='/' element={<Textform heading='Enter your text to analyze' mode={mode}/>}/>
       <Route exact path='/about' element={ <About mode={mode}/>}/>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
