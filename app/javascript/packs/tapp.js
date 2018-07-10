import { ReactDOM } from "react-dom";
// import { loadComponents } from "loadable-components";
import { createStore, compose, applyMiddleware } from "redux";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import createHistory from "history/createBrowserHistory";
import App from "../tapp/scenes/app/exporter";

import reducers from "../tapp/redux/reducers/index";

// maybe no logger when its in development mode?
const logger = createLogger();
const history = createHistory();

const store = createStore(
  reducers,
  compose(
    applyMiddleware(routerMiddleware(history), ReduxThunk, logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

// document.addEventListener("DOMContentLoaded", () => {
//   ReactDOM.render(
//     <Provider store={store}>
//       <ConnectedRouter history={history}>
//         <Hello />
//       </ConnectedRouter>
//     </Provider>,
//     document.getElementById("root")
//   );
// });

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
