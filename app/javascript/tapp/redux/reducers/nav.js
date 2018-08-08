import {
  NAV_IS_LOADING,
  FETCH_AUTH_SUCC,
  FETCH_AUTH_FAIL,
  ADD_ALERTS,
  SELECT_APPLICANT,
  SELECT_TAB
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
        selectedRole: action.payload.roles[0],
        isDevelopment: action.payload.isDevelopment,
        isLoading: false,
        error: {}
      };

    case FETCH_AUTH_FAIL:
      return { ...state, error: action.payload, isLoading: false };

    case ADD_ALERTS: {
      const { alerts } = state;
      alerts.push(action.payload);
      return { ...state, alerts };
    }
    case SELECT_APPLICANT:
      return { ...state, selectedApplicant: action.payload };

    case SELECT_TAB:
      return { ...state, selectedTab: action.payload };

    default:
      return state;
  }
};
