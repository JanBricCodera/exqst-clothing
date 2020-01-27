import React from "react";

import "./App.css";
import HomePage from "./pages/homepage.component";
import {Switch, Route} from 'react-router-dom';


const HoodiesPage=()=>(
  <div>
  <h1>Hoodies page</h1>
</div>
);


function App() {
  return (
    <div>
      <Switch>
        <Route exact path = "/" component={HomePage}/>
        <Route path = "/hoodies" component={HoodiesPage}/> 
      </Switch>

    </div>
  );
}

export default App;
