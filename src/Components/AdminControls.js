import React,{useState,useEffect, Children} from 'react'
import CSVReader from 'react-csv-reader'
import Alert from 'react-bootstrap/Alert'
import axios from'axios'
import { Redirect, Route } from 'react-router-dom'
import LoginPage from './loginPage'
const AdminControls = () => {
 const [validAdmin, setvalidAdmin] = useState(false)
  const [success, setsuccess] = useState(null)
  const logout=()=>{
    sessionStorage.removeItem('token')
    return(<Route path="/login" component={LoginPage} />)
  }
  useEffect(() => {
   sessionStorage.getItem('token') ? setvalidAdmin(true): setvalidAdmin(false)
   } ,  [])
    const sendReq=async(record)=>{
      try{
        console.log("req sent")
      const res = await axios.post("http://localhost:8000/updatedData/",JSON.stringify(record))
      console.log(res)
if( res.status=="200" || res.status=="201"){ setsuccess(true)}
else{setsuccess(false)}
    }
      catch(err){
        console.log(err)
        
      }
    }
    const onChange=(data)=>{
      
 data.map((item, index)=>
 {
 
     if(index!=0){
      //  if(item[0] ==='ABB'){
      let record={
          stock_name: item[0],
          trading_date: item[10],
          closing_price: item[5]
        }
      sendReq(record)

   
     }
 })

    }

        
    
    const papaparseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: header =>
          header
            .toLowerCase()
            .replace(/\W/g, '_')
      }
    return (
        <div>
{ validAdmin == true ?
          <div>
          {success == true ? 
          <Alert variant="success">
  <Alert.Heading>Update Done</Alert.Heading>
</Alert>:<h1></h1>}
{success == false ? 
          <Alert variant="warning">
  <Alert.Heading>Updatefailed</Alert.Heading>
</Alert>:<h1></h1>}
<div className="adminContent">


<div className="uploadFile">
            <p className="fileuploadTitle"><u>Upload Bhavcopy</u></p>
        <CSVReader onFileLoaded={(data) => onChange(data)}
       inputStyle={{textAlign:"center", padding:"20px"}}
         /> 
      </div>
      </div>
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", width:"100%", marginTop:"30px", }}>
      <button style={{border:"1px solid rgb(12, 1, 41)", padding:"3px"}} onClick={logout}><a style={{color:"black"}} href="/login">Logout</a></button> 
      </div> </div>
      :
       <div>
         <h4 style={{marginTop:"30px", color:"red", width:"100%", textAlign:"center"}}>Access Restricted ! </h4>
         </div>
         }

      </div>
    )
}
export default AdminControls;
