import React from "react";

import "./App.css";
import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import {Switch, Route} from 'react-router-dom';
import Header from "./components/header/header.component";

const HoodiesPage=()=>(
  <div>
  <h1>Hoodies page</h1>
</div>
);


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path = "/" component={HomePage}/>
        <Route path = "/hoodies" component={HoodiesPage}/> 
        <Route path = "/shop" component={ShopPage}/> 
      </Switch>

    </div>
  );
}

export default App;
