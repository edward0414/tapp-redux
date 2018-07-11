import {
  NAV_IS_LOADING,
  FETCH_AUTH_SUCC,
  FETCH_AUTH_FAIL
} from "../constants/nav";

// nav field
/*
nav: {
    roles: [], // array of { 'tapp_admin', 'instructor' }
    selectedRole: null,
    user: null,

    selectedTab: null,

    // list of unread notifications (string can contain HTML, but be careful because it is not sanitized!)
    notifications: [],
    isDevelopment: null,
    alerts: [],
    selectedApplicant: null,
    selectedRound: null,
    selectedSession: null,
},
*/

export default (
  state = {
    roles: [],
    selectedRole: null,
    user: null,
    selectedTab: null,
    notifications: [],
    isDevelopment: null,
    alerts: [],
    selectedApplicant: null,
    isLoading: false,
    error: {}
  },
  action
) => {
  switch (action.type) {
    case NAV_IS_LOADING:
      return { ...state, isLoading: true, error: {} };

    case FETCH_AUTH_SUCC:
      //more to add

      return {
        ...state,
        roles: action.payload.roles,
        user: action.payload.user,
        selectedRole: action.payload.roles[1],
        isDevelopment: action.payload.isDevelopment,
        isLoading: false,
        error: {}
      };

    case FETCH_AUTH_FAIL:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};
