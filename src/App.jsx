import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './layouts/Navbar'
import NewTask from './Components.jsx/NewTask'
import Home from './Components.jsx/Home'
import Task from './Components.jsx/Task'
import EditTask from './Components.jsx/EditTask'
function App() {
  

  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path = '/' element = {<Home/>}/>
        <Route path = '/newtask' element = {<NewTask/>}/>
        <Route path = '/alltask' element = {<Task/>}/>
        <Route path = '/edittask' element = {<EditTask/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
