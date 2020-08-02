import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Components/Screens/Home";
import { ManipulateUser } from "./Components/Screens/ManipulateUser";
import { UserProvider } from "./Contexts/UserContext";
import { userActionsPaths, homePaths } from "./Constants/Paths";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="m-4">
      <UserProvider>
        <Router>
          <Switch>
            <Route
              exact
              path={[homePaths.HOME1, homePaths.HOME2]}
              component={Home}
            />
            <Route
              exact
              path={userActionsPaths.ADD_USER}
              component={ManipulateUser}
            />
            <Route
              exact
              path={userActionsPaths.EDIT_USER + "/:id"}
              component={ManipulateUser}
            />
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
