/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-comment-textnodes */
import './App.css';
import NavBar_component from './components/NavBar';
import Home from './components/Home/Home.js';
import PLC from './components/Courses/PLC.js'
import Python from './components/Courses/Python/Python.js'
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
          <NavBar_component></NavBar_component>
          <Routes >
            <Route path='/' element={<Home/>}/>
            <Route path='/python' element={<Python/>}></Route>
            <Route path='/plc' element={<PLC/>}/>
          </Routes>
        
    </>

  );
}

export default App;