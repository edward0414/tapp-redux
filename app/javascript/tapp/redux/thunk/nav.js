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
      .then(resp => (resp.ok ? resp.json().catch(msgFailure) : respFailure))
      .then(resp => {
        dispatch(fetchingAuthSucc(resp.roles, resp.utorid, resp.development));
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
