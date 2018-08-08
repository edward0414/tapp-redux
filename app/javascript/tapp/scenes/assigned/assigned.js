import React from "react";
import { Grid, Row, Col, ButtonToolbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ApplicantTableMenu } from "../../components/applicantTableMenu.js";
import { ApplicantTable } from "../../components/applicantTable.js";
import { routeConfig } from "../../routeConfig";
import PropTypes from "prop-types";

class Assigned extends React.Component {
  static propTypes = {
    navKey: PropTypes.string,
    applicants: PropTypes.object,
    selectedTab: PropTypes.string,
    selectApplicant: PropTypes.func,
    selectTab: PropTypes.func,
    fetchAll: PropTypes.func
  };

  componentDidMount() {
    console.log("Assigned did mount");
    this.props.fetchAll();
  }

  render() {
    console.log("###############  AT ASSIGNED  #################");
    let cursorStyle = { cursor: "auto" };

    // table/menu configuration
    this.config = [
      {
        header: "Last Name",
        data: p =>
          <span
            className="highlightOnHover"
            onClick={() => this.props.selectApplicant(p.applicantId)}
          >
            {p.applicant.lastName}&nbsp;
            {p.applicant.notes && <i className="fa fa-paperclip" />}
          </span>,
        sortData: p => p.applicant.lastName,

        style: { width: 0.1 }
      },
      {
        header: "First Name",
        data: p => p.applicant.firstName,
        sortData: p => p.applicant.firstName,

        style: { width: 0.1 }
      },
      {
        header: "Dept.",
        data: p => p.applicant.dept,
        sortData: p => p.applicant.dept,

        filterLabel: "Dept.",
        filterCategories: ["DCS", "Other"],
        filterFuncs: [
          p => p.applicant.dept == "Computer Science",
          p => p.applicant.dept != "Computer Science"
        ],

        style: { width: 0.08 }
      },
      {
        header: "Prog.",
        data: p => p.applicant.program,
        sortData: p => p.applicant.program,

        filterLabel: "Prog.",
        filterCategories: ["PostDoc", "PhD", "Masters", "UG"],
        filterFuncs: [
          p => p.applicant.program == "PostDoc",
          p => p.applicant.program == "PhD",
          p =>
            ["MSc", "MASc", "MScAC", "MEng", "OG"].includes(
              p.applicant.program
            ),
          p => p.applicant.program == "UG"
        ],

        style: { width: 0.05 }
      },
      {
        header: "Year",
        data: p => p.applicant.year,
        sortData: p => p.applicant.year,

        style: { width: 0.03 }
      },
      {
        header: "Email",
        data: p => p.applicant.email,
        sortData: p => p.applicant.email,

        style: { width: 0.2 }
      },
      {
        header: "Course(s)",
        data: p =>
          <ButtonToolbar>
            {/* {this.props.getAssignmentsByApplicant(p.applicantId).map(ass =>
              <Link
                to={
                  routeConfig.abc.route +
                  "#" +
                  ass.positionId +
                  "-" +
                  p.applicantId +
                  "-1"
                }
                key={"link-" + p.applicantId + "-" + ass.positionId}
              >
                <Button
                  bsSize="xsmall"
                  style={{ borderColor: "#555" }}
                  onClick={() => this.props.selectSingleCourse(ass.positionId)}
                >
                  {this.props.getCourseCodeById(
                    ass.positionId
                  )}&nbsp;&middot;&nbsp;{ass.hours}
                </Button>
              </Link>
            )} */}
          </ButtonToolbar>,

        filterLabel: "Course"
        // filterCategories: this.props.getCourseCodes(),
        // for each course, filter out applicants who are not assigned to that course
        // filterFuncs: Object.keys(this.props.getCoursesList()).map(key => p =>
        //   this.props
        //     .getAssignmentsByApplicant(p.applicantId)
        //     .some(pref => pref.positionId == key)
        // )
      }
    ];
    let className = ".navbar-margin-top";
    return (
      <Grid fluid id="assigned-grid">
        <ApplicantTableMenu
          config={this.config}
          getSelectedSortFields={() => this.props.getSorts()}
          anyFilterSelected={field => this.props.anyFilterSelected(field)}
          isFilterSelected={(field, category) =>
            this.props.isFilterSelected(field, category)}
          toggleFilter={(field, category) =>
            this.props.toggleFilter(field, category)}
          clearFilters={() => this.props.clearFilters()}
          addSort={field => this.props.addSort(field)}
          removeSort={field => this.props.removeSort(field)}
          toggleSortDir={field => this.props.toggleSortDir(field)}
        />

        <ApplicantTable
          config={this.config}
          applicants={this.props.applicants}
          rowId={p => "assigned-" + p.applicantId}
          getSelectedSortFields={() => this.props.getSorts()}
          getSelectedFilters={() => this.props.getFilters()}
          width="100vw"
        />
      </Grid>
    );
  }

  componentWillMount() {
    if (this.props.selectedTab !== this.props.navKey) {
      this.props.selectTab(this.props.navKey);
    }
  }

  componentWillUpdate() {
    if (this.props.selectedTab !== this.props.navKey) {
      this.props.selectTab(this.props.navKey);
    }
  }
}

export default Assigned;
