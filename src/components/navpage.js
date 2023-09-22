import React from "react";
import {  Routes, Route } from 'react-router-dom';
import Blog from "../pages/blog";
import Admin from "../pages/admin";
function Navpage(){
    return(
        <>
      <Routes>
<Route path="/" element={<Blog/>}/>
<Route path="/admin" element={<Admin/>}/>
<Route path="/blog" element={<Blog/>}/>

      </Routes>
        </>
    )
}
export default Navpage;