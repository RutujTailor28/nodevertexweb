import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";

import AgencyLandingPage from "./demos/AgencyLandingPage";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

 const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <AgencyLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
 export default App
