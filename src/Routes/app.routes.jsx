import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import New from '../pages/New';
import Details from '../pages/Details';
import Profile from '../pages/Profile';


const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/New' element={<New/>}/>
        <Route path='/Details/:id' element={<Details/>}/>
        <Route path='/Profile' element={<Profile/>}/>
        <Route path='*' element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default AppRoutes