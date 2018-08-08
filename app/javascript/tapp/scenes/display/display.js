import React from "react";
import {
  Table,
  Modal,
  Button,
  FormControl,
  FormGroup,
  Form,
  Glyphicon
} from "react-bootstrap";
import PropTypes from "prop-types";

class Display extends React.Component {
  static propTypes = {
    courses: PropTypes.array,
    fetchCourses: PropTypes.func,
    createInstructor: PropTypes.func
  };

  state = { show: false };

  componentDidMount() {
    console.log("display did mount");
    this.props.fetchCourses();
  }

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleSave = () => {
    this.props.createInstructor({
      utorid: this.utorid.value,
      name: this.name.value,
      email: this.email.value
    });
  };

  render() {
    let courseInfo;
    if (this.props.courses) {
      courseInfo = this.props.courses.map((course, i) =>
        <tr key={i}>
          <td>
            {course.position}
          </td>
          <td>
            {course.course_name}
          </td>
          <td>
            {course.instructors[0] ? course.instructors[0].name : "N/A"}
            {/* <Glyphicon glyph="plus" /> */}
          </td>
          <td>
            {course.qualifications}
          </td>
          <td>
            <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
              Add New Instructor
            </Button>
          </td>
        </tr>
      );
    }
    return (
      <div id="display">
        <Table striped bordered condensed hover responsive>
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Instructors</th>
              <th>Qualifications</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {courseInfo}
          </tbody>
        </Table>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>New Instructor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form horizontal>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Utorid"
                  inputRef={ref => {
                    this.utorid = ref;
                  }}
                />
              </FormGroup>

              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Name"
                  inputRef={ref => {
                    this.name = ref;
                  }}
                />
              </FormGroup>

              <FormGroup>
                <FormControl
                  type="email"
                  placeholder="Email"
                  inputRef={ref => {
                    this.email = ref;
                  }}
                />
              </FormGroup>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="primary" onClick={this.handleSave}>
              Save changes
            </Button>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Display;
