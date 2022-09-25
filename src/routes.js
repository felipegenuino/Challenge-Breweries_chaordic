import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home";
import Detail from "./Pages/Detail";
 

 
const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="detail/:id" element={<Detail />} />
        {/* <Route path="users/:userId" element={<UserDetails />} /> */}
            </Routes>
     )
 }
 
 export default AppRoutes;


 

