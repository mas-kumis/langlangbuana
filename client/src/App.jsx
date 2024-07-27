import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import RegisterPage from './pages/Register'


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
