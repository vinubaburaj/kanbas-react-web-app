import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./styles.css";

function Kanbas() {
  return (
    <div className="d-flex">
      <div className="wd-kanbas-navigation">
        <KanbasNavigation />
      </div>
      {/* <div> */}
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>
      {/* </div> */}
    </div>
  );
}
export default Kanbas;
