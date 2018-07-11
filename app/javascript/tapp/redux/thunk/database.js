import {
  databaseIsLoading,
  fetchApplicantsSucc,
  fetchApplicantsFail,
  fetchApplicationsSucc,
  fetchApplicationsFail,
  fetchAssignmentsSucc,
  fetchAssignmentsFail,
  fetchCoursesSucc,
  fetchCoursesFail
} from "../actions/database";

// TODO: input utorid, different url endpoints for different role

const fetchApplicants = () => {
  return dispatch => {
    dispatch(databaseIsLoading(true));
    fetch("/applicants", {
      headers: {
        Accept: "application/json"
      },
      method: "GET",
      credentials: "include"
    })
      .then(resp => (resp.ok ? resp.json().catch(msgFailure) : respFailure))
      .then(resp => {
        dispatch(fetchApplicantsSucc(resp));
      })
      .catch(error => {
        dispatch(fetchApplicantsFail(error));
        //TODO alert for nav
        // appState.alert(
        //   "<b>" + init.method + " " + URL + "</b> Network error: " + error
        // );
      });
  };
};

const fetchApplications = () => {
  return dispatch => {
    dispatch(databaseIsLoading(true));
    fetch("/applications", {
      headers: {
        Accept: "application/json"
      },
      method: "GET",
      credentials: "include"
    })
      .then(resp => (resp.ok ? resp.json().catch(msgFailure) : respFailure))
      .then(resp => {
        dispatch(fetchApplicationsSucc(resp));
      })
      .catch(error => {
        dispatch(fetchApplicationsFail(error));
        //TODO alert for nav
        // appState.alert(
        //   "<b>" + init.method + " " + URL + "</b> Network error: " + error
        // );
      });
  };
};

const fetchAssignments = () => {
  return dispatch => {
    dispatch(databaseIsLoading(true));
    fetch("/assignments", {
      headers: {
        Accept: "application/json"
      },
      method: "GET",
      credentials: "include"
    })
      .then(resp => (resp.ok ? resp.json().catch(msgFailure) : respFailure))
      .then(resp => {
        dispatch(fetchAssignmentsSucc(resp));
      })
      .catch(error => {
        dispatch(fetchAssignmentsFail(error));
        //TODO alert for nav
        // appState.alert(
        //   "<b>" + init.method + " " + URL + "</b> Network error: " + error
        // );
      });
  };
};

const fetchCourses = () => {
  return dispatch => {
    dispatch(databaseIsLoading(true));
    fetch("/courses", {
      headers: {
        Accept: "application/json"
      },
      method: "GET",
      credentials: "include"
    })
      .then(resp => (resp.ok ? resp.json().catch(msgFailure) : respFailure))
      .then(resp => {
        dispatch(fetchCoursesSucc(resp));
      })
      .catch(error => {
        dispatch(fetchCoursesFail(error));
        //TODO alert for nav
        // appState.alert(
        //   "<b>" + init.method + " " + URL + "</b> Network error: " + error
        // );
      });
  };
};

export { fetchApplicants, fetchApplications, fetchAssignments, fetchCourses };
