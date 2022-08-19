  import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    Outlet
  } from 'react-router-dom'
  
  
  import Login from './pages/Login'
  import ResetPassword from './pages/ResetPassword';
  import SinUp from './pages/SinUp'
  import Home from './pages/Home'
  import RegisterBooks from './pages/RegisterBooks'
  import Configurations from './pages/Configurations'
  
  function ProtectedRoutes ({ redirectTo }) {
    const token = localStorage.getItem('users');
    return token ? <Outlet /> : <Navigate to={redirectTo } /> 
  }
  
  export default function MyRoutes () {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/sinUp" element={<SinUp />} />
          <Route path="/registerBooks" element={<RegisterBooks />} />
          <Route path="/configurations" element={<Configurations />} />
          <Route element={<ProtectedRoutes redirectTo='/' />}>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/registerBooks" element={<RegisterBooks />} /> */}
        
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }

