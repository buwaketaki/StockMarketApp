import React, { useState, useContext, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import {StockDataContext} from '../Contexts/stockDataContext'
import { Redirect } from "react-router-dom";
const LoginPage = () => {
    const {login,InvalidDetails, RedirectTo} = useContext(StockDataContext)
    const [userName, setuserName] = useState("")
    const [password, setpassword] = useState("")
   
    const nameChange=(e)=>{
        setuserName(e.target.value)
    }
    const passwordChange=(e)=>{
        setpassword(e.target.value)

    }
    const onSubmit= async(e)=>{
        e.preventDefault()
       console.log(userName)
       console.log(password)
     
 await login(userName, password)

    
    }

return (
    <div>
      {RedirectTo == true ? <Redirect to='/admin' /> :
    <div className="loginForm">
    
<div className="loginItems ">
<p className="loginTitle pb-2 pt-2">Admin Login</p>
  {/* <MDBRow>
    <MDBCol md="6"> */} 
      <form className="pl-4 pr-4">
       
      
        <input placeholder="Username" value={userName} onChange={nameChange} type="text" id="username"  className="form-control mt-4" required/>
       {userName == ""? <p style={{color:"red", fontSize:"13px", padding:"5px"}}>Enter Username</p>: <p></p>}
        <br />
       
        <input placeholder="Password" onChange={passwordChange} value={password} type="password" id="password"  className="form-control " required/>
       {password == ""? <p style={{color:"red", fontSize:"13px", padding:"5px"}}>Enter Password</p>: <p></p>}
        { InvalidDetails == true ?
        <div className="text-center mt-5 mb-5"><h6><i style={{color:"red",}}>Invalid Details</i></h6></div>:<div></div>}
        <div className="text-center  mb-3">
          <button disabled={userName == "" || password == ""} type="submit" onClick={onSubmit} style={{border:"2px solid rgb(12, 1, 41)", 
          width:"30%", borderRadius:"25px", color:"black",boxShadow:"2px 2px 4px grey", padding:"5px"}} type="submit">Login</button>
        </div>
      </form>
    {/* </MDBCol>
  </MDBRow> */}
</div>
</div>}</div>
);
};

export default LoginPage;