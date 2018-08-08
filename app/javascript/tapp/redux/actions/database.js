import {
  DATABASE_IS_LOADING,
  FETCH_APPLICANTS_SUCC,
  FETCH_APPLICANTS_FAIL,
  FETCH_APPLICATIONS_SUCC,
  FETCH_APPLICATIONS_FAIL,
  FETCH_ASSIGNMENTS_SUCC,
  FETCH_ASSIGNMENTS_FAIL,
  FETCH_COURSES_SUCC,
  FETCH_COURSES_FAIL,
  FETCH_INSTRUCTORS_SUCC,
  FETCH_INSTRUCTORS_FAIL,
  FETCH_SESSIONS_SUCC,
  FETCH_SESSIONS_FAIL,
  CREATE_INSTRUCTOR_SUCC,
  CREATE_INSTRUCTOR_FAIL
} from "../constants/database";

const databaseIsLoading = isLoading => {
  return { type: DATABASE_IS_LOADING, payload: isLoading };
};

const fetchApplicantsSucc = applicants => {
  return { type: FETCH_APPLICANTS_SUCC, payload: applicants };
};

const fetchApplicantsFail = error => {
  return { type: FETCH_APPLICANTS_FAIL, payload: error };
};

const fetchAssignmentsSucc = assignments => {
  return { type: FETCH_ASSIGNMENTS_SUCC, payload: assignments };
};

const fetchAssignmentsFail = error => {
  return { type: FETCH_ASSIGNMENTS_FAIL, payload: error };
};

const fetchApplicationsSucc = applications => {
  return { type: FETCH_APPLICATIONS_SUCC, payload: applications };
};

const fetchApplicationsFail = error => {
  return { type: FETCH_APPLICATIONS_FAIL, payload: error };
};

const fetchCoursesSucc = courses => {
  return { type: FETCH_COURSES_SUCC, payload: courses };
};

const fetchCoursesFail = error => {
  return { type: FETCH_COURSES_FAIL, payload: error };
};

const fetchInstructorsSucc = instructors => {
  return { type: FETCH_INSTRUCTORS_SUCC, payload: instructors };
};

const fetchInstructorsFail = error => {
  return { type: FETCH_INSTRUCTORS_FAIL, payload: error };
};

const fetchSessionsSucc = sessions => {
  return { type: FETCH_SESSIONS_SUCC, payload: sessions };
};

const fetchSessionsFail = error => {
  return { type: FETCH_SESSIONS_FAIL, payload: error };
};

const createInstructorSucc = () => {
  return { type: CREATE_INSTRUCTOR_SUCC, payload: "true" };
};

const createInstructorFail = error => {
  return { type: CREATE_INSTRUCTOR_FAIL, payload: error };
};

export {
  databaseIsLoading,
  fetchApplicantsSucc,
  fetchApplicantsFail,
  fetchApplicationsSucc,
  fetchApplicationsFail,
  fetchAssignmentsSucc,
  fetchAssignmentsFail,
  fetchCoursesSucc,
  fetchCoursesFail,
  fetchInstructorsSucc,
  fetchInstructorsFail,
  fetchSessionsSucc,
  fetchSessionsFail,
  createInstructorSucc,
  createInstructorFail
};
