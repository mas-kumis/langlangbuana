import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import PrivateRoute from './pages/PrivateRoute'

function App() {
  return (
   <BrowserRouter>
    <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={ <PrivateRoute><Dashboard/> </PrivateRoute>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
