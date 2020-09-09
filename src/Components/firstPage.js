import React ,{useState,setState, useContext, useEffect} from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Loader from 'react-loader-spinner'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter , MDBRow, MDBCol} from 'mdbreact';
import Dropdown from 'react-bootstrap/Dropdown'
import ListItems from './listItems'
import {StockDataContext} from '../Contexts/stockDataContext'
import RecentUpdatesTable from "./recentUpdatesTable";
import { Redirect, Route } from "react-router-dom";
const FirstPage = () => {
    const {getRecentData, Loading, recievedData,getlist, getlistItems}= useContext(StockDataContext)
    const [val, setval] = useState(null)
    // const onClick=(e)=>{
    //     setval(e)
    //     getRecentData(e)
    //     console.log(val)
    // }
   useEffect(() => {
    
     getlist()
   }, [])
   const getDetails=(scrip, startDate, endDate)=>{
     toggle()
    getRecentData(scrip, startDate, endDate)
    
   
    }
    const [modal, setmodal] = useState(false)
  
    const toggle = () => {
       setmodal(!modal)
      getlist()
     }
    
  return (
    <div>
{
  Loading == true || getlistItems == null ? <div  style={{
      width:"100%", textAlign: "center", marginTop:"30px"}}>  <Loader
    type="TailSpin"
    color="rgb(12, 1, 41)"
    height={80}
    width={80}
    
    
    />
    <h6 style={{
      width:"100%", textAlign: "center", color: "blue",marginTop:"30px"
    }}><i> Loading</i></h6>
    </div>:
   
   
   <div className="frontPageContent">
    
    <h4 className="frontPagetitle  ">Scrip Details</h4>
  
<div  className="page">
    
  {  getlistItems.map((item, index)=>
    <div  >
    
  
             
    <ListItems  modal={modal} getDetails={getDetails} id={index} data={item}/></div>)}</div>
    
    </div>
}
{recievedData  != null ?
 <MDBContainer>
                  
 <MDBModal size="fluid m-4" isOpen={modal} toggle={toggle}>
   <MDBModalHeader toggle={toggle}>Scrip Details</MDBModalHeader>
   
   <MDBModalBody>
  
   <RecentUpdatesTable />
   </MDBModalBody>
   <MDBModalFooter>
     <MDBBtn size="sm" color="black" onClick={toggle}>Close</MDBBtn>
    
   </MDBModalFooter>
 </MDBModal>
</MDBContainer>
:<div>
  </div>}
    </div>

  );
}

export default FirstPage;
