// import { useEffect } from "react";
// import {Routes, Route,} from "react-router-dom";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { Profile } from "./components/Profile";
import React from 'react';
function App() {
  return (
   <>
   {/* <Routes>
    <Route path="/Login" element={<Login/>}/>
   </Routes> */}
   {/* <Login/> */}
   <Dashboard />
   {/* <Profile/> */}

   </>
  );
}

export default App;
