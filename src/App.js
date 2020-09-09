import React from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import UpdateTable from "./Components/recentUpdatesTable";
import FirstPage from "./Components/firstPage";
import LoginPage from './Components/loginPage'
import { Route, Switch, Redirect } from "react-router-dom";
import StockDataContextProvider from "./Contexts/stockDataContext";
import AdminControls from "./Components/AdminControls";
import HistoricalData from './Components/HistoricalData'
import RecentUpdatesTable from "./Components/recentUpdatesTable";
function App() {
  return (
    <React.Fragment>
      <StockDataContextProvider>
        <Navbar />
        <Switch>
      
          <Route path="/" exact component={FirstPage} />
          <Route path="/admin" exact component={AdminControls} />
          <Route path="/history/:scripName" exact component={HistoricalData} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/recentData" exact component={RecentUpdatesTable} />
          
        </Switch>
      </StockDataContextProvider>
    </React.Fragment>
  );
}

export default App;
