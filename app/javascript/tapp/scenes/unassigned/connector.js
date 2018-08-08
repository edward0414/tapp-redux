import { connect } from "react-redux";
import Unassigned from "./unassigned";
import { selectApplicant } from "../../redux/actions/nav";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    selectApplicant: applicantId => dispatch(selectApplicant(applicantId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Unassigned);
