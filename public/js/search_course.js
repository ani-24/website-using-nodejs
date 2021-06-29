import { courseDet as courses } from "./coursedet.js";

const searchCourse = (searchval) => {
  courses.forEach((course) => {
    console.log(course.tag, searchval.toLowerCase());
    if (course.tag == searchval.toLowerCase()) {
      return course;
    } else {
      return "nothing";
    }
  });
};

export { searchCourse };
