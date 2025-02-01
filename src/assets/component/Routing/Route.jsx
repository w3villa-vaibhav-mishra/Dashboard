import React from 'react'
import {BrowserRouter,Routes,Route, Form} from 'react-router-dom';
import App from '../../../App';
import Dashboard from '../Dashboard/Dashboard';
import Table from '../Table/Table';
import Forms from '../Form/Form';

function Router() {
  return (
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<App/>}>
    <Route path="/home" element={<Dashboard/>}></Route>
    <Route path="/table" element={<Table/>}></Route>
    <Route path="/form" element={<Forms/>}></Route>

    </Route>
    
 </Routes>
 </BrowserRouter>
  )
}

export default Router