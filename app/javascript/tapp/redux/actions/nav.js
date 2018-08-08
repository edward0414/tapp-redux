import {
  NAV_IS_LOADING,
  FETCH_AUTH_FAIL,
  FETCH_AUTH_SUCC,
  ADD_ALERTS,
  SELECT_APPLICANT,
  SELECT_TAB
} from "../constants/nav";

const navIsLoading = isLoading => {
  return { type: NAV_IS_LOADING, payload: isLoading };
};

//TODO
const fetchingAuthSucc = (roles, user, isDevelopment) => {
  return {
    type: FETCH_AUTH_SUCC,
    payload: { roles: roles, user: user, isDevelopment: isDevelopment }
  };
};

const fetchingAuthFail = error => {
  return { type: FETCH_AUTH_FAIL, payload: error };
};

const addAlerts = alert => {
  return { type: ADD_ALERTS, payload: alert };
};

const selectApplicant = applicantId => {
  return { type: SELECT_APPLICANT, payload: applicantId };
};

const selectTab = tab => {
  return { type: SELECT_TAB, payload: tab };
};

export {
  navIsLoading,
  fetchingAuthSucc,
  fetchingAuthFail,
  addAlerts,
  selectApplicant,
  selectTab
};
