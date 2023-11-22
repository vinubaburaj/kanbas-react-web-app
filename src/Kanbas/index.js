import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Signin from "./Users/signin";
import Account from "./Users/account";
import "./styles.css";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import UserTable from "./Users/table";
import Signup from "./Users/signup";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api" ;
  const URL = `${API_BASE}/courses`;

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };

  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });

  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([response.data, ...courses]);
    setCourse({ name: "", number: "" });
  };

  const deleteCourse = async (courseId) => {
    const response = await axios.delete(`${URL}/${courseId}`);
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = async (courseId) => {
    const response = await axios.put(`${URL}/${courseId}`, course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  return (
    <Provider store={store}>
      <div className="d-flex">
        <div className="wd-kanbas-navigation">
          <KanbasNavigation />
        </div>
        {/* <div> */}
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route
            path="Dashboard"
            element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            }
          />
          {/* <Route path="Courses" element={<Dashboard />} /> */}
          <Route
            path="Courses/:courseId/*"
            element={<Courses />}
          />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
        </Routes>
        {/* </div> */}
      </div>
    </Provider>
  );
}
export default Kanbas;
