import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import RegisterPage from './pages/Register'
import Dashboard from './pages/Dashboard'


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
