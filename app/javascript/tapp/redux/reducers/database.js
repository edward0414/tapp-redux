import {
  DATABASE_IS_LOADING,
  FETCH_APPLICANTS_SUCC,
  FETCH_APPLICANTS_FAIL,
  FETCH_ASSIGNMENTS_SUCC,
  FETCH_ASSIGNMENTS_FAIL,
  FETCH_APPLICATIONS_SUCC,
  FETCH_APPLICATIONS_FAIL,
  FETCH_COURSES_SUCC,
  FETCH_COURSES_FAIL,
  FETCH_INSTRUCTORS_SUCC,
  FETCH_INSTRUCTORS_FAIL,
  FETCH_SESSIONS_SUCC,
  FETCH_SESSIONS_FAIL,
  CREATE_INSTRUCTOR_SUCC,
  CREATE_INSTRUCTOR_FAIL
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
  applicants: null,
  applications: null,
  assignments: null,
  courses: null,
  instructors: null,
  sessions: null,
  importing: 0
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

    case FETCH_INSTRUCTORS_SUCC:
      return {
        ...state,
        instructors: action.payload,
        isLoading: false,
        error: {}
      };

    case FETCH_INSTRUCTORS_FAIL:
      return { ...state, error: action.payload, isLoading: false };

    case FETCH_SESSIONS_SUCC:
      return {
        ...state,
        sessions: action.payload,
        isLoading: false,
        error: {}
      };

    case FETCH_SESSIONS_FAIL:
      return { ...state, error: action.payload, isLoading: false };

    case CREATE_INSTRUCTOR_SUCC:
      return {
        ...state,
        isLoading: false,
        error: {}
      };

    case CREATE_INSTRUCTOR_FAIL:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};
