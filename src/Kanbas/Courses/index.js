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

function Courses() {
  const { courseId } = useParams();
  const windowLocation = useLocation();
  const course = db.courses.find((course) => course._id === courseId);
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
            <Route path="Home" element={<h1>Home</h1>} />
            <Route path="Modules" element={ <Modules /> } />
            <Route path="Assignments" element={<h1>Assignments</h1>} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      {/* </div> */}
    </div>
  );
}
export default Courses;
