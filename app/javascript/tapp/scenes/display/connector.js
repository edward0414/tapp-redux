import { connect } from "react-redux";
import Display from "./display";
import { fetchCourses, createInstructor } from "../../redux/thunk/database";

const mapStateToProps = state => {
  return { courses: state.database.courses };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCourses: () => dispatch(fetchCourses()),
    createInstructor: instructor => dispatch(createInstructor(instructor))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);
