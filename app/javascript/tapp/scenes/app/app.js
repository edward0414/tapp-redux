/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import "../../../tapp-styles";

import React from "react";

import { appState } from "../../appState.js";
import { fetchAll, fetchAuth } from "../../fetch.js";
import { routeConfig } from "../../routeConfig.js";

import { Navbar } from "../../components/navbar.js";
import { ApplicantModal } from "../../components/applicantModal.js";

/*** Main app component ***/

class App extends React.Component {
  constructor(props) {
    super(props);

    // get current user role and username
    fetchAuth().then(() => fetchAll());
  }

  componentDidMount() {
    appState.subscribe(this.forceUpdate.bind(this, null));
  }

  render() {
    let role = appState.getSelectedUserRole(),
      user = appState.getCurrentUserName();

    // this should only happen before we have fetched the current auth information
    if (user == null) {
      console.log("packs.js: user is null");
      return <div id="loader" />;
    }

    switch (role) {
      case "tapp_admin":
        return <AdminRouter {...appState} />;
      case "tapp_assistant":
        return <AssistantRouter {...appState} />;
      case "instructor":
        return <InstrRouter {...appState} />;
    }

    return null;
  }
}

/*** Routers ***/

const AdminRouter = props => {
  let selectedApplicant = props.getSelectedApplicant();

  return (
    <Router basename="tapp">
      <div>
        <Navbar {...props} role="tapp_admin" />

        <Switch>
          <Route
            path={routeConfig.courses.route}
            component={routeConfig.courses.component}
          />
          <Route
            path={routeConfig.abc.route}
            component={routeConfig.abc.component}
          />
          <Route
            path={routeConfig.assigned.route}
            component={routeConfig.assigned.component}
          />
          <Route
            path={routeConfig.unassigned.route}
            component={routeConfig.unassigned.component}
          />
          <Route
            path={routeConfig.summary.route}
            component={routeConfig.summary.component}
          />
          <Redirect from="/" to={routeConfig.summary.route} />
        </Switch>

        {selectedApplicant &&
          <ApplicantModal applicantId={selectedApplicant} {...props} />}

        <div className="container-fluid" id="alert-container">
          {props
            .getAlerts()
            .map(alert =>
              <div
                key={"alert-" + alert.id}
                className="alert alert-danger"
                onClick={() => props.dismissAlert(alert.id)}
                onAnimationEnd={() => props.dismissAlert(alert.id)}
                dangerouslySetInnerHTML={{ __html: alert.text }}
              />
            )}
        </div>
      </div>
    </Router>
  );
};

const InstrRouter = props => {
  let selectedApplicant = props.getSelectedApplicant();
  return (
    <Router basename="tapp">
      <div>
        <Navbar {...props} role="instructor" />
        <Switch>
          <Route
            path={routeConfig.instructor.route}
            component={routeConfig.instructor.component}
          />
          <Redirect from="/" to={routeConfig.instructor.route} />
        </Switch>
        {selectedApplicant &&
          <ApplicantModal applicantId={selectedApplicant} {...props} />}
      </div>
    </Router>
  );
};

const AssistantRouter = props => {
  return (
    <Router basename="tapp">
      <div>
        <Navbar {...props} role="tapp_assistant" />
        <Switch>
          <Route
            path={routeConfig.assistant.route}
            component={routeConfig.assistant.component}
          />
          <Redirect from="/" to={routeConfig.assistant.route} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
