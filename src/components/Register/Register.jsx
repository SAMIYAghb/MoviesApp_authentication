import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Joi from 'joi';

export default function Register() {

  let navigate = useNavigate();
  const [errorList, setErrorList] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [user, setuser] = useState({
    first_name: '',
    last_name: '',
    age:0,
    email: '',
    password: ''
  });


  function getUserData(eventInfo){
    let myUser = {...user}; //get a deepcopy of user user
    //console.log(e.target.value);
    //myUser.first_name = e.target.value; //get the value of the input
    //setuser(myUser); //change the value of user 'setstate'
    //console.log(myUser);
    //with this method i have to make one function for earch input =>not best practice
    myUser[eventInfo.target.name]= eventInfo.target.value;
    setuser(myUser);
    console.log(myUser);
  }

  async function sendRegisterDataToApi(){
    // let {data} = await axios.post(`https://sticky-note-fe.vercel.app/signup` , user);
    let {data} = await axios.post(`https://route-egypt-api.herokuapp.com/signup` , user);
    console.log(data);
    if(data.message === 'success'){
      setisLoading(false);
      //Login|home
      navigate('/login');
    }
    else{
      setisLoading(false);
      setError(data.message);
    }
  }

  function submitRegisterForm(e){
    
    e.preventDefault();//prevent form behaviour =>reload
    
    setisLoading(true);
    // sendRegisterDataToApi();
    let validation = validateRegisterForm();
    console.log(validation);
    if (validation.error){
      setisLoading(false);
      setErrorList(validation.error.details);
    }
    else
    {
      sendRegisterDataToApi();
    }
  }
  
  function validateRegisterForm(){
    let scheme = Joi.object({
      first_name:Joi.string().min(3).max(10).required(),
      last_name:Joi.string().min(3).max(10).required(),
      age:Joi.number().min(15).max(80).required(),
      email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
      password:Joi.string().pattern(/^[A-Z][a-z]{3,8}/)
    }); 
    return scheme.validate(user, {abortEarly:false});
    // console.log(scheme.validate(user, {abortEarly:false}));
  }


  return<>


  <div className="w-75 mx-auto mt-5">

    {errorList.map((err, index) => {

    if(err.context.label ==='password')
    {
      return <div key = {index} className="alert alert-danger my-2">Password must containe between 3 and 8 characters uppercase letter, lowercase letter, number </div>
    }
    else
    {
      return <div key = {index} className="alert alert-danger my-2">{err.message}</div>
    }
  } 
    )}


    {error.length >0 ?<div className="alert alert-danger my-2">{error}</div>:''}
    
    <form onSubmit={submitRegisterForm}>
      <label htmlFor="first_name" className='mb-2'> first Name</label>
      <input onChange={getUserData} type="text" className='form-control my-input' name='first_name' id='first_name'/>

      <label htmlFor="last_name" className='mb-2 mt-4'> Last Name</label>
      <input onChange={getUserData} type="text" className='form-control my-input' name='last_name' id='last_name'/>

      <label htmlFor="age" className='mb-2 mt-4'>Age</label>
      <input onChange={getUserData} type="number" className='form-control my-input' name='age'/>

      <label htmlFor="email" className='mb-2 mt-4'>Email</label>
      <input onChange={getUserData} type="text" className='form-control my-input' name='email'/>

      <label htmlFor="password" className='mb-2 mt-4'>Password</label>
      <input onChange={getUserData} type="password" className='form-control my-input' name='password'/>

      <button type='submit' className='btn btn-info mt-4 py-1 px-5'>
        {isLoading === true?<i className='fas fa-spinner fa-spin'></i>:'Register'}
        </button>
    </form>
  </div>
  
  </>
}


//there is 3 conditions for using the HOOK:
//1-use it in a function component (we can't use hook in class component)
//2-use hook in top level of function (the same level of return)
//3-we can't use hook as conditionel (if..)