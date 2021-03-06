import React, { useState, setState, useEffect, createContext } from "react";
import axios from "axios";
import{Route,Redirect} from 'react-router-dom'

export const StockDataContext = createContext();
const StockDataContextProvider = (props) => {
    const [logedin, setlogedin] = useState(false)
  const [Loading, setLoading] = useState(false);
  const [recievedData, setrecievedData] = useState(null);
  const [recievedHistoricalData, setrecievedHistoricalData] = useState(null);
  const [historyDataRecieved, sethistoryDataRecieved] = useState(false);
  const [InvalidDetails, setInvalidDetails] = useState(false)
const [RedirectTo, setRedirectTo] = useState(false)
const [loggedout, setloggedout] = useState(false)
const [getlistItems, setgetlistItems] = useState(null)
  const stock_name = "HDFCBANK";
//   get recent updated data
  const getRecentData = async (stock_name) => {
    setLoading(true);
    console.log("inside e=recnt data")
    try {
      const res = await axios.get(
        "http://ec2-3-21-125-163.us-east-2.compute.amazonaws.com/scripData/" + stock_name + "/" 
      );
      setrecievedData(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

//   get entire historical data
  const getHistoryData = async (stock_name) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "http://ec2-3-21-125-163.us-east-2.compute.amazonaws.com/historicalData/" + stock_name + "/"
      );
     
      setrecievedHistoricalData(res.data.reverse());
      console.log(res.data);

      setLoading(false);
      sethistoryDataRecieved(true);
    } catch (err) {
      console.log(err);
    }

  };
const getlist=async()=>{
    setLoading(true)
    try {
        
        const res = await axios.post(
          "http://ec2-3-21-125-163.us-east-2.compute.amazonaws.com/details/"
        );
    //    const data = res.data.reverse()
        setgetlistItems(res.data);
        console.log(res.data);
  
        setLoading(false);
      
      } catch (err) {

        console.log(err);
      }
  
}
const login = async(name, pass)=>{
    try{
    const res = await axios.post(
        "http://ec2-3-21-125-163.us-east-2.compute.amazonaws.com/auth/",{

            "username":name,
            "password":pass});

      console.log(res)
        sessionStorage.setItem('token', res.data.token);
   if(res.data.token){
       setlogedin(true)
       setRedirectTo(true)
   }
       

    }
    
    catch(err){
        console.log("error"+err)
       
        setInvalidDetails(true)
    }
    
}
const logout= ()=>{
    sessionStorage.removeItem('token')
    setlogedin(false)
    setloggedout(true)
}
  return (
    <div>
      <StockDataContext.Provider
        value={{getlist, getlistItems, loggedout,logout,logedin, RedirectTo, login, getRecentData, recievedData, Loading, historyDataRecieved,recievedHistoricalData, getHistoryData,InvalidDetails }}
      >
        {props.children}
      </StockDataContext.Provider>
    </div>
  );
};
export default StockDataContextProvider;
