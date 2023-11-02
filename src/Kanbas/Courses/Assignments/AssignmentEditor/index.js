import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAssignment, selectAssignment } from "../assignmentsReducer";

function AssignmentEditor() {
  // const assignment = db.assignments.find(
  //   (assignment) => assignment._id === assignmentId
  // );

  const { courseId, assignmentId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const a = assignments.find((a) => a._id === assignmentId);
  const [assignment, setAssignment] = useState(a);

  const handleSave = () => {
    dispatch(updateAssignment(assignment));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="mt-2">
      <h6>Assignment Editor</h6>
      <hr />
      <label className="form-label">
        Assignment Name
        <input
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          className="form-control"
        />
      </label>
      <textarea
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        value={assignment.description}
        className="form-control"
      />
      <div className="row mt-2">
        <div className="col-2">Points</div>
        <div className="col-4">
          <input
            onChange={(e) =>
              setAssignment({ ...assignment, points: e.target.value })
            }
            value={assignment.points}
            className="form-control"
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-2">Due</div>
        <div className="col-4">
          <input
            onChange={(e) =>
              setAssignment({ ...assignment, dueDate: e.target.value })
            }
            type="date"
            value={assignment.dueDate}
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-2">Available From</div>
        <div className="col-4">
          <input
            onChange={(e) =>
              setAssignment({
                ...assignment,
                availableFromDate: e.target.value,
              })
            }
            type="date"
            value={assignment.availableFromDate}
          />
        </div>
      </div>

      <div className="row mt-2">
        <div className="col-2">Until</div>
        <div className="col-4">
          <input
            onChange={(e) =>
              setAssignment({
                ...assignment,
                availableUntilDate: e.target.value,
              })
            }
            type="date"
            value={assignment.availableUntilDate}
          />
        </div>
      </div>

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
