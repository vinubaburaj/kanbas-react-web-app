import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="mt-2">
      <h6>Assignment Name</h6>
      <input value={assignment.title} className="form-control mb-2" />
      <hr />
      <div className="float-end me-3">
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-light me-2"
      >
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-danger me-2">
        Save
      </button>
      </div>
    </div>
  );
}

export default AssignmentEditor;
