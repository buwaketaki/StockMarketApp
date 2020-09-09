import React,{useState, setState,useEffect, useContext} from 'react'
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact";
import {StockDataContext} from '../Contexts/stockDataContext'
import { Redirect } from 'react-router-dom';

const Navbar = () => {

  const {logedin, logout, loggedout} = useContext(StockDataContext)
  useEffect(() => {
    
  }, [sessionStorage.getItem('token')])
   const [isOpen, setisOpen] = useState(false)
      
     const toggleCollapse = () => {
        setisOpen( !isOpen );
      }
    return (
  
            <MDBNavbar color="black"style={{padding:"0px"}} dark expand="md">
       
        <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
           
            
          </MDBNavbarNav>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          
          <MDBNavbarNav right>
             {/* {logedin == true ? */}
            <MDBNavItem>
            <MDBNavLink className="white-text" to="/login">
            
             
              Admin Login  </MDBNavLink></MDBNavItem>
            {/* </MDBNavItem>:
            <MDBNavItem><strong onClick={logout} className="white-text">Logout</strong>
            loggedout == true ? <Redirect to="/" />:<div></div></MDBNavItem>
            } */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
        
    )
}
export default Navbar