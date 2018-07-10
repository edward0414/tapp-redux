/*** Route configuration ***/
// import loadable from "loadable-components";

// export const Courses = loadable(() => import("./scenes/courses/exporter"));
// export const ABC = loadable(() => import("./scenes/abc/exporter"));
// export const Assigned = loadable(() => import("./scenes/assigned/exporter"));
// export const Unassigned = loadable(() =>
//   import("./scenes/unassigned/exporter")
// );
// export const Summary = loadable(() => import("./scenes/summary/exporter"));
// export const Assistant = loadable(() => import("./scenes/assistant/exporter"));
// export const Instructor = loadable(() => import("./scenes/abc/exporter"));

export const routeConfig = {
  courses: {
    label: "Courses",
    route: "/courses",
    id: "courses"
  },
  abc: {
    label: "Applicants by Course",
    route: "/applicantsbycourse",
    id: "abc"
  },
  assigned: {
    label: "All Assigned",
    route: "/assigned",
    id: "assigned"
  },
  unassigned: {
    label: "All Unassigned",
    route: "/unassigned",
    id: "unassigned"
  },
  summary: {
    label: "Summary",
    route: "/summary",
    id: "summary"
  },
  assistant: {
    label: "Assistant Panel",
    route: "/assistantPanel",
    id: "assistant"
  },
  instructor: {
    label: "Instructor Panel",
    route: "/instructorPanel",
    id: "instructor"
  }
};
