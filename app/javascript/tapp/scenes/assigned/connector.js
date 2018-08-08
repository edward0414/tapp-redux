import { connect } from "react-redux";
import Assigned from "./assigned";
import { selectApplicant, selectTab } from "../../redux/actions/nav";
import { fetchAll } from "../../redux/thunk/database";

const mapStateToProps = state => {
  const { selectedTab } = state.nav;
  return {
    selectedTab: state.nav.selectedTab,
    applicants: state.database.applicants
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectApplicant: applicantId => dispatch(selectApplicant(applicantId)),
    selectTab: tab => dispatch(selectTab(tab)),
    fetchAll: () => dispatch(fetchAll())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Assigned);
