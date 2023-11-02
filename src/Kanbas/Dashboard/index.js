import { Link } from "react-router-dom";
import db from "../Database";
import courseImage from "../Images/course-img.jpeg";
import "./index.css";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className="ms-5">
      <span className="wd-header">Dashboard</span>
      <br />
      <hr />
      <span className="wd-published-courses ms-3">Published courses ({courses.length})</span>
      <br />
      <hr className="ms-3"/>
      <div className="list-group wd-card-group">
        <div className="row row-cols-md-4 g-4">
          {courses.map((course) => (
            <div className="col">
              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item"
              >
                <div className="card h-100">
                  <img src={courseImage} />
                  <div className="card-body">
                    <h6 className="card-title wd-card-title">{course._id}</h6>

                    <div className="card-text">
                      <p className="card-text">{course.name}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
