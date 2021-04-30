import React from "react";
import Dash from "components/app/routes/main/dash";
import { Switch, Route } from "react-router-dom";
import Auth from "./routes/auth";
const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route path="/dash" component={Dash} />
      </Switch>
    </div>
  );
};

export default App;
