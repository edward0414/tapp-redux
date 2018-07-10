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
    case "isLoading":
      return { ...state, isLoading: true, error: {} };

    case "fetchingAuthSucc":
      //more to add

      return {
        ...state,
        roles: action.payload.roles,
        user: action.payload.user,
        isLoading: false,
        error: {}
      };

    case "fetchingAuthFail":
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};
