import React, { Component } from "react";
import "./App.css";
import { GetStartedStep } from "./steps/GetStartedStep/GetStartedStep";
import { DaysStep } from "./steps/DaysStep/DaysStep";
import { TrainingTypeStep } from "./steps/TrainingTypeStep/TrainingTypeStep";
import { FinallStep } from "./steps/FinallStep/FinallStep";

import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <main className="container jumbotron text-center shadow">
        <Switch>
          <Route exact path="/">
            <GetStartedStep />
          </Route>
          <Route exact path="/step_1">
            <DaysStep />
          </Route>
          <Route exact path="/step_2">
            <TrainingTypeStep />
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
