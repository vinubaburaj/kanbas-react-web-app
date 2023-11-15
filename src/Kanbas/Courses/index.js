import db from "../../Kanbas/Database";
import {
  useParams,
  Navigate,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./index.css";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import AddAssignment from "./Assignments/AddAssignment";
import { useState, useEffect } from "react";
import axios from "axios";

function Courses() {
  const { courseId } = useParams();
  const windowLocation = useLocation();
  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api/" ;
  const URL = `${API_BASE}/courses`;
  const [ course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  }

  useEffect(() => {
    findCourseById(courseId);
  },[courseId]);


  // const course = courses.find((course) => course._id === courseId);
  const link = windowLocation.pathname.split("/"); /* To display breadcrumbs */
  return (
    <div className="wd-course-screen">
      <nav className="wd-breadcrumb ms-2 mt-2">
        <ol className="breadcrumb">
          <li className="breadcrumb-item wd-breadcrumb-course">
            <span className="me-2">
              <RxHamburgerMenu />
            </span>
            {course._id}
          </li>
          <li className="breadcrumb-item">{link[4]}</li>
        </ol>
      </nav>
      <hr />
      <CourseNavigation />
      {/* <div> */}
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "300px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={ <Home />} />
            <Route path="Modules" element={ <Modules /> } />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Assignments/addAssignment" element={ <AddAssignment/> } />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      {/* </div> */}
    </div>
  );
}
export default Courses;
