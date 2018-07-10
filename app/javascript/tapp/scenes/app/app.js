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
import * as routes from "../../routeConfig.js";

import { Navbar } from "../../components/navbar.js";
import { ApplicantModal } from "../../components/applicantModal.js";

import Assigned from "../assigned/exporter";
import Unassigned from "../unassigned/exporter";
import Summary from "../summary/exporter";

/*** Main app component ***/

class App extends React.Component {
  constructor(props) {
    super(props);

    // get current user role and username
    fetchAuth().then(() => fetchAll());
  }

  componentDidMount() {
    // appState.subscribe(this.forceUpdate.bind(this, null));
    
    TODO!!!!

    // let role = appState.getSelectedUserRole(),
    //   user = appState.getCurrentUserName();
  }

  render() {

    // this should only happen before we have fetched the current auth information
    if (user == null) {
      console.log("packs.js: user is null");
      return <div id="loader" />;
    }

    // switch (role) {
    //   case "tapp_admin":
    return <AdminRouter {...appState} />;
    //   case "tapp_assistant":
    //     return <AssistantRouter {...appState} />;
    //   case "instructor":
    //     return <InstrRouter {...appState} />;
    // }

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
            path={routes.routeConfig.courses.route}
            component={routes.Courses}
          />
          <Route path={routes.routeConfig.abc.route} component={routes.ABC} />
          <Route
            path={routes.routeConfig.assigned.route}
            component={routes.Assigned}
          />
          <Route
            path={routes.routeConfig.unassigned.route}
            component={routes.Unassigned}
          />
          <Route
            path={routes.routeConfig.summary.route}
            component={routes.Summary}
          />
          <Redirect from="/" to={routes.routeConfig.summary.route} />
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

// const InstrRouter = props => {
//   let selectedApplicant = props.getSelectedApplicant();
//   return (
//     <Router basename="tapp">
//       <div>
//         <Navbar {...props} role="instructor" />
//         <Switch>
//           <Route
//             path={routes.routeConfig.instructor.route}
//             component={routes.Instructor}
//           />
//           <Redirect from="/" to={routes.routeConfig.instructor.route} />
//         </Switch>
//         {selectedApplicant &&
//           <ApplicantModal applicantId={selectedApplicant} {...props} />}
//       </div>
//     </Router>
//   );
// };

// const AssistantRouter = props => {
//   return (
//     <Router basename="tapp">
//       <div>
//         <Navbar {...props} role="tapp_assistant" />
//         <Switch>
//           <Route
//             path={routes.routeConfig.assistant.route}
//             component={routes.Assistant}
//           />
//           <Redirect from="/" to={routes.routeConfig.assistant.route} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

export default App;
