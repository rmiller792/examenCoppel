import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import AbonarEnLinea from './pages/abonarEnLinea/AbonarEnLinea'

class App extends Component{

  render(){
    const routes = (
      <Switch>
        <Route path="/" exact component={AbonarEnLinea} />
        <Route path="/abonar-en-linea" exact component={AbonarEnLinea} />
        <Route component={AbonarEnLinea} />
      </Switch>
    );
    return(
      <>
      {routes}
      </>
    )
  }
}

export default App;
