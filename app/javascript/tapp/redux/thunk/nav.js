import {
  navIsLoading,
  fetchingAuthSucc,
  fetchingAuthFail
} from "../actions/nav";

const fetchAuth = () => {
  return dispatch => {
    dispatch(navIsLoading(true));
    fetch("/roles", {
      headers: {
        Accept: "application/json"
      },
      method: "GET",
      credentials: "include"
    })
      .then(
        resp => (resp.ok ? resp.json().catch() : console.log("resp failed."))
      )
      .then(resp => {
        dispatch(fetchingAuthSucc(resp.roles, "reidkare", resp.development));
      })
      .catch(error => {
        dispatch(fetchingAuthFail(error));
        //TODO alert for nav
        // appState.alert(
        //   "<b>" + init.method + " " + URL + "</b> Network error: " + error
        // );
      });
  };
};

export { fetchAuth };
