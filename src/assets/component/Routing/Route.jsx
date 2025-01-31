import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from '../../../App';
import Dashboard from '../Dashboard/Dashboard';
import Table from '../Table/Table';
function Router() {
  return (
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<App/>}>
    <Route path="/home" element={<Dashboard/>}></Route>
    <Route path="/table" element={<Table/>}></Route>
    </Route>
    
 </Routes>
 </BrowserRouter>
  )
}

export default Router