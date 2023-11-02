import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { AiOutlinePlus, AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import { TfiPencilAlt } from 'react-icons/tfi'; 
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div className="me-5">
      <div class="wd-assignments-header mt-2">
        <input
          class="form-control w-25 float-start"
          type="text"
          placeholder="Search for Assignment"
        />
        <div class="buttons float-end">
          <button class="btn wd-bg-lightgray">
            <AiOutlinePlus />
            Group
          </button>
          <button class="btn btn-danger">
            <AiOutlinePlus />
            Assignment
          </button>
          <button class="btn wd-bg-lightgray">
            <HiOutlineEllipsisVertical />
          </button>
        </div>
      </div>
      <br />
      <br />
      <hr />
      <div className="list-group">
        <div className="list-group-item wd-assignment-type">
          <HiOutlineEllipsisVertical />
          ASSIGNMENTS
          <div className="wd-assignment-type-right-text float-end">
            <span className="wd-assignment-type-weightage me-2">
              40% of Total
            </span>
            <AiOutlinePlus />
            <HiOutlineEllipsisVertical />
          </div>
        </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item wd-assignment-detail"
          >
            <HiOutlineEllipsisVertical />
            <TfiPencilAlt color="green" />
            <span className="wd-assignment-title ms-2">{assignment.title}</span>
            <span class="wd-check-ellipse-button-float-end float-end">
              <AiFillCheckCircle color="green" />
              <HiOutlineEllipsisVertical />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
