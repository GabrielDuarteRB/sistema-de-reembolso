import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/cadastro' element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  )
}
export default Routers