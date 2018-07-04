/*** Route configuration ***/

import Courses from "./scenes/courses/exporter";
import ABC from "./scenes/abc/exporter";
import Assigned from "./scenes/assigned/exporter";

const routeConfig = {
  courses: {
    label: "Courses",
    route: "/courses",
    id: "courses",
    component: Courses
  },
  abc: {
    label: "Applicants by Course",
    route: "/applicantsbycourse",
    id: "abc",
    component: ABC
  },
  assigned: {
    label: "All Assigned",
    route: "/assigned",
    id: "assigned",
    component: Assigned
  },
  unassigned: {
    label: "All Unassigned",
    route: "/unassigned",
    id: "unassigned",
    component: import("./scenes/unassigned/exporter")
  },
  summary: {
    label: "Summary",
    route: "/summary",
    id: "summary",
    component: import("./scenes/summary/exporter")
  },
  assistant: {
    label: "Assistant Panel",
    route: "/assistantPanel",
    id: "assistant",
    component: import("./scenes/assistant/exporter")
  },
  instructor: {
    label: "Instructor Panel",
    route: "/instructorPanel",
    id: "instructor",
    component: import("./scenes/abc/exporter")
  }
};

export { routeConfig };
