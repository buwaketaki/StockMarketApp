import React, { useState, useEffect, useContext } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {StockDataContext} from '../Contexts/stockDataContext'
import{Route,Redirect,Link} from 'react-router-dom'
import RecentUpdatesTable from './recentUpdatesTable';
import {MDBContainer, MDBListGroup, MDBListGroupItem,MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
// import RecentUpdatesTable from './recentUpdatesTable'
const ListItems = (props) => {
const{getRecentData, recievedData,Loading}= useContext(StockDataContext)
   const [startDate, setstartDate] = useState(new Date())
   const [endDate, setendDate] = useState(new Date())
   const [redirect, setredirect] = useState(false)
   const data = props.data
   const key = props.id
   const [modal, setmodal] = useState(false)
 const scripname =props.data.scrip.charAt(0).toUpperCase() + props.data.scrip.slice(1).toLowerCase();

  
 const toggle = () => {
    setmodal(true)
    return(
        <Redirect to="/" />
    )
  }
   useEffect(() => {
      
       console.log(props)
     
   }, [])
  const handleStartChange=(date)=>{
      setstartDate(date)
      console.log(date)
      const list = String(date).split(' ')
     const formattedDate= list[2]+ "-"+list[1]+ "-"+list[3]
      console.log(formattedDate)
  }

  const handleEndChange=(date)=>{
    setendDate(date)
    console.log(date)
    const list = String(date).split(' ')
   const formattedDate= list[2]+ "-"+list[1]+ "-"+list[3]
    console.log(formattedDate)
}
    return (
    
        <MDBContainer>
        <MDBListGroup style={{ width: "100%", marginTop:"10px" }}>
          <MDBListGroupItem  className="eachListItem">
            <div className="d-flex w-100 justify-content-between">
           <div> <div style={{fontWeight:"400"}} className="mb-1"><b>Scrip:</b> {scripname}</div> <span>  
           <h6><b></b></h6></span></div>
           <div  className="mb-1"
                  style={{ 
                  color:" rgb(12, 1, 41)",
                  fontSize:"15px",
                  fontWeight:"400", borderBottom:" 0.5px solid rgb(204, 204, 204)", padding:"2px", marginTop:"0px"
                   }}
                    id={props.id}
                  onClick={()=>props.getDetails(props.data.scrip,startDate, endDate)} ><b>View Details</b>
                  </div>
            </div>
          
            <div style={{fontWeight:"400", fontSize:"15x", marginTop:"10px"}}>Range: 5%</div> 
          </MDBListGroupItem>
          </MDBListGroup>
          </MDBContainer>
       
    )
}
export default ListItems;