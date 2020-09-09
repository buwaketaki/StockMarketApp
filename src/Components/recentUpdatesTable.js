import React ,{useContext, useEffect, useRef, createRef} from 'react';
import { MDBTable, MDBTableBody, MDBTableHead, MDBIcon } from 'mdbreact';
import {StockDataContext} from '../Contexts/stockDataContext'
import {Link} from 'react-router-dom';
const RecentUpdatesTable = ({name}) => {
  const {recievedData, getRecentData}= useContext(StockDataContext)
 const tableRef = createRef()
useEffect(() => {
 
  tableRef.current.scrollIntoView({ behavior: 'smooth' });
})
  return (
  <div ref={tableRef}>
   
    <div className="recentUpdateTable">
    <MDBTable striped responsive bordered style={{ marginTop:"20px"}}>
      <MDBTableHead>
        <tr>
        
          <th style={{ fontWeight:"500",textAlign:"center"}}>Scrip Name</th>
          <th style={{ fontWeight:"500",textAlign:"center"}}>No. of Back to Back downs</th>
          <th style={{ fontWeight:"500",textAlign:"center"}}>No. of Back to Back ups</th>
          <th style={{ fontWeight:"500",textAlign:"center"}}>No. of rises in a year</th>
          <th style={{ fontWeight:"500",textAlign:"center"}}>No. of falls in a year</th>
          <th style={{ fontWeight:"500",textAlign:"center"}}>
            No. of days since last Up</th>
            <th style={{ fontWeight:"500",textAlign:"center"}}>
            No. of days since last Down</th>
            <th style={{ fontWeight:"500",textAlign:"center"}}>
            New Current Market Price</th>
            <th style={{ fontWeight:"500",textAlign:"center"}}>
            Latest Change Indicator</th>

          <th style={{ fontWeight:"500",textAlign:"center"}}>View Historical Data</th>

        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td style={{  color:"black",  fontWeight:"400", textAlign:"center"}}>{recievedData.scrip}</td>
          <td style={{  color:"black",  fontWeight:"400", textAlign:"center"}}>{recievedData.downs}</td>
          <td style={{  color:"black",  fontWeight:"400", textAlign:"center"}}>{recievedData.ups}</td>
          <td style={{  color:"black",  fontWeight:"400", textAlign:"center"}}>{recievedData.no_of_rises}</td>
          <td style={{  color:"black",  fontWeight:"400", textAlign:"center"}}>{recievedData.no_of_falls}</td>
          <td style={{  color:"black",  fontWeight:"400", textAlign:"center"}}>{recievedData.no_of_days_since_last_up}</td>
          <td style={{  color:"black",  fontWeight:"400", textAlign:"center"}}>{recievedData.no_of_days_since_last_down}</td>
          <td style={{  color:"black",  fontWeight:"400", textAlign:"center"}}>{recievedData.new_current_market_price}</td>
          <td style={{  color:"black",  fontWeight:"400", textAlign:"center"}}>{recievedData.latest_change_indicator}</td>

          <td style={{  color:"black",  fontWeight:"400", textAlign:"center"}}>
            <Link to={{pathname:`/history/${recievedData.scrip}`}}>Click Here
            </Link></td>

        </tr>
        
      </MDBTableBody>
    </MDBTable>
    </div></div>
  );
}

export default RecentUpdatesTable;