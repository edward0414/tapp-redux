import {
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
} from "../actions/database";

// TODO: input utorid, different url endpoints for different role

// const fetchApplicants = () => {
//   return dispatch => {
//     dispatch(databaseIsLoading(true));
//     fetch("/applicants", {
//       headers: {
//         Accept: "application/json"
//       },
//       method: "GET",
//       credentials: "include"
//     })
//       .then(
//         resp => (resp.ok ? resp.json().catch() : console.log("resp failed."))
//       )
//       .then(resp => {
//         dispatch(fetchApplicantsSucc(resp));
//       })
//       .catch(error => {
//         dispatch(fetchApplicantsFail(error));
//         //TODO alert for nav
//         // appState.alert(
//         //   "<b>" + init.method + " " + URL + "</b> Network error: " + error
//         // );
//       });
//   };
// };

// const fetchApplications = () => {
//   return dispatch => {
//     dispatch(databaseIsLoading(true));
//     fetch("/applications", {
//       headers: {
//         Accept: "application/json"
//       },
//       method: "GET",
//       credentials: "include"
//     })
//       .then(
//         resp => (resp.ok ? resp.json().catch() : console.log("resp failed."))
//       )
//       .then(resp => {
//         dispatch(fetchApplicationsSucc(resp));
//       })
//       .catch(error => {
//         dispatch(fetchApplicationsFail(error));
//         //TODO alert for nav
//         // appState.alert(
//         //   "<b>" + init.method + " " + URL + "</b> Network error: " + error
//         // );
//       });
//   };
// };

// const fetchAssignments = () => {
//   return dispatch => {
//     dispatch(databaseIsLoading(true));
//     fetch("/assignments", {
//       headers: {
//         Accept: "application/json"
//       },
//       method: "GET",
//       credentials: "include"
//     })
//       .then(
//         resp => (resp.ok ? resp.json().catch() : console.log("resp failed."))
//       )
//       .then(resp => {
//         dispatch(fetchAssignmentsSucc(resp));
//       })
//       .catch(error => {
//         dispatch(fetchAssignmentsFail(error));
//         //TODO alert for nav
//         // appState.alert(
//         //   "<b>" + init.method + " " + URL + "</b> Network error: " + error
//         // );
//       });
//   };
// };

const fetchCourses = () => {
  return dispatch => {
    dispatch(databaseIsLoading(true));
    fetch("/positions", {
      headers: {
        Accept: "application/json"
      },
      method: "GET",
      credentials: "include"
    })
      .then(
        resp => (resp.ok ? resp.json().catch() : console.log("resp failed."))
      )
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

const fetchInstructors = () => {
  return dispatch => {
    dispatch(databaseIsLoading(true));
    fetch("/instructors", {
      headers: {
        Accept: "application/json"
      },
      method: "GET",
      credentials: "include"
    })
      .then(
        resp => (resp.ok ? resp.json().catch() : console.log("resp failed."))
      )
      .then(resp => {
        dispatch(fetchInstructorsSucc(resp));
      })
      .catch(error => {
        dispatch(fetchInstructorsFail(error));
        //TODO alert for nav
        // appState.alert(
        //   "<b>" + init.method + " " + URL + "</b> Network error: " + error
        // );
      });
  };
};

const createInstructor = instructor => {
  return dispatch => {
    fetch("/instructors", {
      headers: {
        Accept: "application/json"
      },
      body: JSON.stringify(instructor),
      method: "POST",
      credentials: "include"
    })
      .then(
        resp => (resp.ok ? resp.json().catch() : console.log("resp failed."))
      )
      .then(resp => {
        dispatch(createInstructorSucc());
        // fetchInstructors();
      })
      .catch(error => {
        dispatch(createInstructorFail(error));
        //TODO alert for nav
        // appState.alert(
        //   "<b>" + init.method + " " + URL + "</b> Network error: " + error
        // );
      });
  };

  // postData(
  //   "/instructors",
  //   instructor,
  //   () => {
  //     getInstructors();
  //   },
  //   resp => {
  //     alert(resp.message);
  //     appState.hideInstructorModal();
  //   },
  //   resp => {
  //     appState.alert(resp.message);
  //   }
  // );
};

// const fetchSessions = () => {
//   return dispatch => {
//     dispatch(databaseIsLoading(true));
//     fetch("/sessions", {
//       headers: {
//         Accept: "application/json"
//       },
//       method: "GET",
//       credentials: "include"
//     })
//       .then(
//         resp => (resp.ok ? resp.json().catch() : console.log("resp failed."))
//       )
//       .then(resp => {
//         dispatch(fetchSessionsSucc(resp));
//       })
//       .catch(error => {
//         dispatch(fetchSessionsFail(error));
//         //TODO alert for nav
//         // appState.alert(
//         //   "<b>" + init.method + " " + URL + "</b> Network error: " + error
//         // );
//       });
//   };
// };

const fetchAll = () => {
  return dispatch => {
    dispatch(databaseIsLoading(true));
    fetch("/applicants", {
      headers: {
        Accept: "application/json"
      },
      method: "GET",
      credentials: "include"
    })
      .then(
        resp => (resp.ok ? resp.json().catch() : console.log("resp failed."))
      )
      .then(resp => {
        dispatch(fetchApplicantsSucc(resp));
        fetch("/applications", {
          headers: {
            Accept: "application/json"
          },
          method: "GET",
          credentials: "include"
        })
          .then(
            resp =>
              resp.ok ? resp.json().catch() : console.log("resp failed.")
          )
          .then(resp => {
            dispatch(fetchApplicationsSucc(resp));
            fetch("/assignments", {
              headers: {
                Accept: "application/json"
              },
              method: "GET",
              credentials: "include"
            })
              .then(
                resp =>
                  resp.ok ? resp.json().catch() : console.log("resp failed.")
              )
              .then(resp => {
                dispatch(fetchAssignmentsSucc(resp));
                fetch("/positions", {
                  headers: {
                    Accept: "application/json"
                  },
                  method: "GET",
                  credentials: "include"
                })
                  .then(
                    resp =>
                      resp.ok
                        ? resp.json().catch()
                        : console.log("resp failed.")
                  )
                  .then(resp => {
                    dispatch(fetchCoursesSucc(resp));
                    fetch("/instructors", {
                      headers: {
                        Accept: "application/json"
                      },
                      method: "GET",
                      credentials: "include"
                    })
                      .then(
                        resp =>
                          resp.ok
                            ? resp.json().catch()
                            : console.log("resp failed.")
                      )
                      .then(resp => {
                        dispatch(fetchInstructorsSucc(resp));
                        fetch("/sessions", {
                          headers: {
                            Accept: "application/json"
                          },
                          method: "GET",
                          credentials: "include"
                        })
                          .then(
                            resp =>
                              resp.ok
                                ? resp.json().catch()
                                : console.log("resp failed.")
                          )
                          .then(resp => {
                            dispatch(fetchSessionsSucc(resp));
                          })
                          .catch(error => {
                            dispatch(fetchSessionsFail(error));
                            //TODO alert for nav
                            // appState.alert(
                            //   "<b>" + init.method + " " + URL + "</b> Network error: " + error
                            // );
                          });
                      })
                      .catch(error => {
                        dispatch(fetchInstructorsFail(error));
                        //TODO alert for nav
                        // appState.alert(
                        //   "<b>" + init.method + " " + URL + "</b> Network error: " + error
                        // );
                      });
                  })
                  .catch(error => {
                    dispatch(fetchCoursesFail(error));
                    //TODO alert for nav
                    // appState.alert(
                    //   "<b>" + init.method + " " + URL + "</b> Network error: " + error
                    // );
                  });
              })
              .catch(error => {
                dispatch(fetchAssignmentsFail(error));
                //TODO alert for nav
                // appState.alert(
                //   "<b>" + init.method + " " + URL + "</b> Network error: " + error
                // );
              });
          })
          .catch(error => {
            dispatch(fetchApplicationsFail(error));
            //TODO alert for nav
            // appState.alert(
            //   "<b>" + init.method + " " + URL + "</b> Network error: " + error
            // );
          });
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

export {
  // fetchApplicants,
  // fetchApplications,
  // fetchAssignments,
  fetchCourses,
  // fetchInstructors,
  // fetchSessions,
  fetchAll,
  createInstructor
};
