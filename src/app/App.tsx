import React from 'react'; 
import '../css/App.css'; 
import { Box, Button, Container, Stack, Typography } from '@mui/material'; 
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"; 
import { RestaurantPage } from './screens/RestaurantPage/index'; 
import { CommunityPage } from './screens/CommunityPage/index'; 
import { OrdersPage } from './screens/OrdersPage/index'; 
import { MemberPage } from './screens/MemberPage/index'; 
import { HelpPage } from './screens/HelpPage/index'; 
import { LoginPage } from './screens/LoginPage/index'; 
import { HomePage } from './screens/HomePage/index'; 
 
function App() { 
  return ( 
    <Router> 
      <div> 
        <nav> 
          <ul> 
            <li> 
              <Link to="/restaurant">RestaurantPage</Link> 
            </li> 
            <li> 
              <Link to="/community">communityPage</Link> 
            </li> 
            <li> 
              <Link to="/orders">OrdersPage</Link> 
            </li> 
            <li> 
              <Link to="/member-page">MemberPage</Link> 
            </li> 
            <li> 
              <Link to="/help">HelpPage</Link> 
            </li> 
            <li> 
              <Link to="/login">Login</Link> 
            </li> 
            <li> 
              <Link to="/">HomePage</Link> 
            </li> 
          </ul> 
        </nav> 
        <Switch> 
          <Route path="/restaurant"> 
            <RestaurantPage /> 
          </Route> 
          <Route path="/community"> 
            <CommunityPage /> 
          </Route> 
          <Route path="/orders"> 
            <OrdersPage /> 
          </Route> 
          <Route path="/member-page"> 
            <MemberPage /> 
          </Route> 
          <Route path="/help"> 
            <HelpPage /> 
          </Route> 
          <Route path="/login"> 
            <LoginPage /> 
          </Route> 
          <Route path="/"> 
              <HomePage /> 
          </Route> 
        </Switch> 
      </div> 
    </Router> 
  ); 
} 
 
export default App; 
 
 
function Home() { 
 return <h2>Home</h2> 
}