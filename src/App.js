import React, { Component } from "react";
import routes from "./routes";
import {Route, Switch, Router } from "react-router-dom";
import {createBrowserHistory} from "history";

const browserHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Switch>
            {routes.map((route, index) => (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.layout(route.component)}
                />
              ))}
        </Switch>
        </Router>
    );
  }
}

export default App;
