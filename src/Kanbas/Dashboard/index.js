import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import courseImage from "../Images/course-img.jpeg";
import "./index.css";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse
}) {
  return (
    <div className="ms-5 me-2">
      <span className="wd-header">Dashboard</span>
      <br />
      <hr />
      <span className="wd-published-courses ms-3">
        Published courses ({courses.length})
      </span>

      <br />
      <hr className="ms-3" />
      <div className="col-6">
        <h5>Add New Course</h5>
        <input
          value={course.name}
          className="form-control"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input
          value={course.number}
          className="form-control mt-1"
          onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input
          value={course.startDate}
          className="form-control mt-1"
          type="date"
          onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input
          value={course.endDate}
          className="form-control mt-1"
          type="date"
          onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <button className="btn btn-success mt-1 mb-2" onClick={addNewCourse}>
          Add
        </button>
        <button
          className="btn btn-primary ms-1 mt-1 mb-2"
          onClick={updateCourse}
        >
          Update
        </button>
      </div>
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
                    <h6 className="card-title wd-card-title">
                      {course.number}
                    </h6>

                    <div className="card-text">
                      <p className="card-text">{course.name}</p>
                      <button
                        className="btn btn-primary"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                      >
                        Edit
                      </button>

                      <button
                        className="btn btn-danger"
                        onClick={(e) => {
                          e.preventDefault();
                          deleteCourse(course._id);
                        }}
                      >
                        Delete
                      </button>
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
