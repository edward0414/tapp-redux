import { connect } from "react-redux";
import Summary from "./summary";
import { addAlerts } from "../../redux/actions/nav";
import { fetchAll } from "../../redux/thunk/database";

const mapStateToProps = state => {
  return { database: state.database };
};

const mapDispatchToProps = dispatch => {
  return {
    addAlerts: alert => dispatch(addAlerts(alert)),
    fetchAll: () => dispatch(fetchAll())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
