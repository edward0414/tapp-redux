import {
  DATABASE_IS_LOADING,
  FETCH_APPLICANTS_SUCC,
  FETCH_APPLICANTS_FAIL,
  FETCH_ASSIGNMENTS_SUCC,
  FETCH_ASSIGNMENTS_FAIL,
  FETCH_APPLICATIONS_SUCC,
  FETCH_APPLICATIONS_FAIL,
  FETCH_COURSES_SUCC,
  FETCH_COURSES_FAIL
} from "../constants/database";

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
    case DATABASE_IS_LOADING:
      return { ...state, isLoading: true, error: {} };

    case FETCH_COURSES_SUCC:
      return { ...state, courses: action.payload, isLoading: false, error: {} };

    case FETCH_COURSES_FAIL:
      return { ...state, error: action.payload, isLoading: false };

    case FETCH_APPLICANTS_SUCC:
      return {
        ...state,
        applicants: action.payload,
        isLoading: false,
        error: {}
      };

    case FETCH_APPLICANTS_FAIL:
      return { ...state, error: action.payload, isLoading: false };

    case FETCH_APPLICATIONS_SUCC:
      return {
        ...state,
        applications: action.payload,
        isLoading: false,
        error: {}
      };

    case FETCH_APPLICATIONS_FAIL:
      return { ...state, error: action.payload, isLoading: false };

    case FETCH_ASSIGNMENTS_SUCC:
      return {
        ...state,
        assignments: action.payload,
        isLoading: false,
        error: {}
      };

    case FETCH_ASSIGNMENTS_FAIL:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};
