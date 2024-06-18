
import React, { useState } from 'react';
import {Swiggy_logo} from '../utils/Logo.jsx';
import MainBody from './MainBody.jsx';


const Header = () => {
  const[BtnName,setBtnName]=useState('Login');
 
  const handleClick = () => {
    setBtnName((prevBtnName) => {
      return prevBtnName === "Login" ? "Logout" : "Login";
    });


  };
  // let falter;
  // const handleSearch=({list})=>{
  //    falter=list.filter((data.info.name.includes(searchText)))


  // }
    return (
      
        <div className='h-24   border-4 border-white rounded-2xl flex items-center justify-between p-4 shadow-lg'>


        <img src={Swiggy_logo} alt="Swiggy Logo" className='h-12' />
        

        <div className='flex gap-2'>
          <button className='px-4 py-2 bg-white rounded-md hover:bg-gray-200'>Home</button>
          <button className='px-4 py-2 bg-white rounded-md hover:bg-gray-200'>Categories</button>
          <button className='px-4 py-2 bg-white rounded-md hover:bg-gray-200'>Contact</button>
          <button >{BtnName}</button>
        </div>
      </div>
   
    );
    
  }




export default Header
