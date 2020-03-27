import React, {Component} from 'react';
import './App.css';
import GetStartedStep from './steps/GetStartedStep';
import FirstFormStep from './steps/FirstFormStep';
import SecondFormStep from './steps/SecondFormStep';
import FinallStep from './steps/FinallStep';

import { Switch, Route } from 'react-router-dom';


class App extends Component{
  render(){
    return (
      <main className="container jumbotron text-center shadow">
        <Switch>
          <Route exact path='/'>
            <GetStartedStep />
          </Route>
          <Route exact path="/step_1">
            <FirstFormStep />
          </Route>
          <Route exact path="/step_2">
            <SecondFormStep />
          </Route>
          <Route exact path="/result">
            <FinallStep />
          </Route>
        </Switch>
        
      </main>
    );
  }
}


export default App;
