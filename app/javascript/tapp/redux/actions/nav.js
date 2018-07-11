import {
  NAV_IS_LOADING,
  FETCH_AUTH_FAIL,
  FETCH_AUTH_SUCC
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

export { navIsLoading, fetchingAuthSucc, fetchingAuthFail };
