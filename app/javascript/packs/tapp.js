// import { loadComponents } from "loadable-components";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import App from "../tapp/scenes/app/exporter";

import reducers from "../tapp/redux/reducers/index";

// maybe no logger when its in development mode?
const logger = createLogger({
  predicate: (getState, action) => action.type !== "@@router/LOCATION_CHANGE",
  collapsed: (getState, action, logEntry) => !logEntry.error
});
const history = createHistory();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(routerMiddleware(history), ReduxThunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

function run() {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.querySelector("#root")
  );
}

const loadedStates = ["complete", "loaded", "interactive"];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener("DOMContentLoaded", run, false);
}
