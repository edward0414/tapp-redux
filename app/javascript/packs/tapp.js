/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import '../tapp-styles';

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";

import reducers from "../tapp/redux/reducers/index";

import { appState } from '../tapp/appState.js';
import { fetchAll, fetchAuth } from '../tapp/fetch.js';
import { routeConfig } from '../tapp/routeConfig.js';

import { Navbar } from '../tapp/components/navbar.js';
import { Courses } from '../tapp/views/courses/courses';
import { ABC } from '../tapp/views/abc/abc';
import { Assigned } from '../tapp/views/assigned/assigned';
import { Unassigned } from '../tapp/views/unassigned/unassigned';
import { Summary } from '../tapp/views/summary/summary';
import { Assistant } from '../tapp/views/assistant/assistant';
import { ApplicantModal } from '../tapp/components/applicantModal.js';

// maybe no logger when its in development mode?
const logger = createLogger();
const history = createHistory();

const store = createStore(
    reducers,
    compose(
        applyMiddleware(routerMiddleware(history), ReduxThunk, logger),
        window.devToolsExtension? window.devToolsExtension(): f => f
    )
);


/*** Main app component ***/

class App extends React.Component {
    constructor(props) {
        super(props);

        // get current user role and username
        fetchAuth().then(()=> fetchAll());
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
          case 'tapp_admin':
            return <AdminRouter {...appState} />;
          case 'tapp_assistant':
            return <AssistantRouter {...appState} />;
          case 'instructor':
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
                <Navbar {...props} role='tapp_admin'/>

                <Switch>
                    <Route
                        path={routeConfig.courses.route}
                        render={() => <Courses navKey={routeConfig.courses.id} {...props} />}
                    />
                    <Route
                        path={routeConfig.abc.route}
                        render={() => <ABC navKey={routeConfig.abc.id} {...props} />}
                    />
                    <Route
                        path={routeConfig.assigned.route}
                        render={() => <Assigned navKey={routeConfig.assigned.id} {...props} />}
                    />
                    <Route
                        path={routeConfig.unassigned.route}
                        render={() => <Unassigned navKey={routeConfig.unassigned.id} {...props} />}
                    />
                    <Route
                        path={routeConfig.summary.route}
                        render={() => <Summary navKey={routeConfig.summary.id} {...props} />}
                    />
                    <Redirect from="/" to={routeConfig.summary.route} />
                </Switch>

                {selectedApplicant && <ApplicantModal applicantId={selectedApplicant} {...props} />}

                <div className="container-fluid" id="alert-container">
                    {props
                        .getAlerts()
                        .map(alert =>
                            <div
                                key={'alert-' + alert.id}
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
                <Navbar {...props} role='instructor'/>
                <Switch>
                    <Route
                        path={routeConfig.instructor.route}
                        render={() => <ABC navKey={routeConfig.instructor.id} {...props} />}
                    />
                    <Redirect from="/" to={routeConfig.instructor.route} />
                </Switch>
                {selectedApplicant && <ApplicantModal applicantId={selectedApplicant} {...props} />}
            </div>
        </Router>
    );
};

const AssistantRouter = props =>{
    return (
      <Router basename="tapp">
          <div>
              <Navbar {...props} role='tapp_assistant'/>
              <Switch>
                  <Route
                      path={routeConfig.assistant.route}
                      render={() => <Assistant navKey={routeConfig.assistant.id} {...props} />}
                  />
                  <Redirect from="/" to={routeConfig.assistant.route} />
              </Switch>
          </div>
      </Router>
    );
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('root'));
});
