import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import App from "./app";
import { fetchAuth } from "../../redux/thunk/nav";
import {
  fetchApplicants,
  fetchApplications,
  fetchAssignments,
  fetchCourses
} from "../../redux/thunk/database";

const mapStateToProps = state => {
  const { selectedRole, user } = state.nav;
  return { selectedRole, user };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAuth: () => dispatch(fetchAuth()),
    fetchApplicants: () => dispatch(fetchApplicants()),
    fetchApplications: () => dispatch(fetchApplications()),
    fetchAssignments: () => dispatch(fetchAssignments()),
    fetchCourses: () => dispatch(fetchCourses())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
