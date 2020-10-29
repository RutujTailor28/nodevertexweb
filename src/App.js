import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ComingSoon from "react-coming-soon";
import CommingSoon from './assets/images/newcomming.jpg'
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          {/*<AgencyLandingPage />*/}
            <ComingSoon
                image={CommingSoon}
                bgColor="#fff"
                textColor="#fff"
                illustration="development"
                title="COMING SOON"
            />
        </Route>
      </Switch>
    </Router>
  );
}

