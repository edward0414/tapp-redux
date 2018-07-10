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
    case "isLoading":
      return { ...state, isLoading: true, error: {} };

    case "fetchingCoursesSucc":
      return { ...state, courses: action.payload, isLoading: false, error: {} };

    case "fetchingCoursesFail":
      return { ...state, error: action.payload, isLoading: false };

    case "fetchingApplicantsSucc":
      return {
        ...state,
        applicantss: action.payload,
        isLoading: false,
        error: {}
      };

    case "fetchingApplicantsFail":
      return { ...state, error: action.payload, isLoading: false };

    case "fetchingApplicationsSucc":
      return {
        ...state,
        applicationss: action.payload,
        isLoading: false,
        error: {}
      };

    case "fetchingApplicationsFail":
      return { ...state, error: action.payload, isLoading: false };

    case "fetchingAssignmentsSucc":
      return {
        ...state,
        assignmentss: action.payload,
        isLoading: false,
        error: {}
      };

    case "fetchingAssignmentsFail":
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};
