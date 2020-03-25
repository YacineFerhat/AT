import React from "react";
import Dash from "components/app/routes/main/dash";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/Dash" component={Dash} />
      </Switch>
    </div>
  );
};

export default App;
