/*
    database: {
        isLoading: false,
        applicants: { fetching: 0, list: null },
        applications: { fetching: 0, list: null },
        assignments: { fetching: 0, list: null },
        courses: { fetching: 0, list: null },
        instructors: { fetching: 0, list: null },
        sessions: { fetching: 0, list: null },

        importing: 0,
    }
    */

const defaultState = {
  isLoading: false,
  error: {},
  applicants: {},
  applications: {},
  assignments: {},
  courses: {},
  instructors: {},
  sessions: {},
  importing: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return { ...state, isLoading: true, error: {} };

    default:
      return state;
  }
};
