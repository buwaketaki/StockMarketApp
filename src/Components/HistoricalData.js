import React,{useContext, useEffect} from 'react'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import {StockDataContext} from '../Contexts/stockDataContext'
import Loader from 'react-loader-spinner'

const HistoricalData = (props) => {
    const {recievedHistoricalData, Loading, getHistoryData}= useContext(StockDataContext)
    console.log(props)
useEffect(() => {
    console.log(props.match.params.scripName)
    getHistoryData(props.match.params.scripName)
}, [props.match.params.scripName])

  return (
 
      <div>
 <h5
    className="tableTitle mt-10">Historical Prices of the Scrip</h5>
     <div className="recentUpdateTable">      {
          Loading == true || recievedHistoricalData == null ?
          <div  style={{
            width:"100%", textAlign: "center", marginTop:"30px"}}>  <Loader
          type="TailSpin"
          color="rgb(12, 1, 41)"
          height={80}
          width={80}
          />
          <h6 style={{
            width:"100%", textAlign: "center", color: "blue",marginTop:"30px"
          }}><i> Loading</i></h6>
          </div>
:
 <div>     
  
    <MDBTable responsive striped bordered style={{ marginTop:"10px", padding:"2px"}}>
      <MDBTableHead style={{position:"sticky", top:"0"}}>
        <tr>
        
          <th style={{fontSize:"15px", padding:"10px", fontWeight:"500", textAlign:"center"}} >Scrip Name</th>
          <th style={{fontSize:"15px", padding:"10px", fontWeight:"500", textAlign:"center"}} >Recent Update Date</th>
          <th style={{fontSize:"15px", padding:"10px", fontWeight:"500", textAlign:"center"}} >Last Market Price</th>
          <th style={{fontSize:"15px", padding:"10px", fontWeight:"500", textAlign:"center"}} >Last lower Price Circuit</th>
          <th style={{fontSize:"15px", padding:"10px", fontWeight:"500", textAlign:"center"}} >Last upper Price Circuit</th>
          <th style={{fontSize:"15px", padding:"10px", fontWeight:"500", textAlign:"center"}} >NEW Market Price</th>
          <th style={{fontSize:"15px", padding:"10px", fontWeight:"500", textAlign:"center"}} >NEW lower Price Circuit</th>
          <th style={{fontSize:"15px", padding:"10px", fontWeight:"500", textAlign:"center"}} >NEW upper Price Circuit</th>
          <th style={{fontSize:"15px", padding:"10px", fontWeight:"500", textAlign:"center"}} >Indicator</th>
          

        </tr>
      </MDBTableHead>
      {recievedHistoricalData.map(item => {
         
      return(
       <MDBTableBody style={{fontSize:"5px"}}>
        <tr  >
          <td style={{fontSize:"14px",  padding:"10px", fontWeight:"400", textAlign:"center"}} >{item.scrip}</td>
          <td style={{fontSize:"14px",  padding:"10px", fontWeight:"400", textAlign:"center"}}>{item.date}</td>
         
          <td style={{fontSize:"14px",  padding:"10px", fontWeight:"400", textAlign:"center"}}>{ parseFloat(item.last_market_price).toFixed( 2 )}</td>
          <td style={{fontSize:"14px",  padding:"10px", fontWeight:"400", textAlign:"center"}}>{parseFloat(item.last_low_range).toFixed( 2 )}</td>
          <td style={{fontSize:"14px",  padding:"10px", fontWeight:"400", textAlign:"center"}}>{ parseFloat(item.last_upper_range).toFixed( 2 )}</td>
          <td style={{fontSize:"14px",  padding:"10px", fontWeight:"400", textAlign:"center"}}>{parseFloat(item.new_market_price).toFixed( 2 )}</td>
          <td style={{fontSize:"14px",  padding:"10px", fontWeight:"400", textAlign:"center"}}>{parseFloat(item.new_lower_range).toFixed( 2 )}</td>
          <td style={{fontSize:"14px",  padding:"10px", fontWeight:"400", textAlign:"center"}}>{parseFloat(item.new_upper_range).toFixed( 2 )}</td>
          <td style={{fontSize:"14px",  padding:"10px", fontWeight:"400", textAlign:"center"}}>{item.change_indicator}</td>
          
        </tr>
        
      </MDBTableBody> 
       ) })}
    </MDBTable>
    </div>
}
</div>
</div>
  )}
 export default HistoricalData