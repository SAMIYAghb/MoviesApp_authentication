import React from 'react';
import {Outlet, useNavigate } from 'react-router-dom';
import Navbar from './../Navbar/Navbar';
import Footer from './../Footer/Footer';



export default function Layout({userData, setuserData}){

  let navigate = useNavigate();
  function logOut(){
    localStorage.removeItem('userToken');
    setuserData(null);
    navigate('/login');
  }


  return <>
  <Navbar logOut={logOut} userData={userData}/>
  <div className="container">
    <Outlet></Outlet>
  </div>
  
  <Footer/>
</>
}
