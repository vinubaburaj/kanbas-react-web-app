import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAssignment, selectAssignment } from "../assignmentsReducer";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  // const assignment = db.assignments.find(
  //   (assignment) => assignment._id === assignmentId
  // );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const currentAssignment = assignments.find(a => a._id === assignmentId)

  dispatch(selectAssignment(currentAssignment));

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
            dispatch(
              selectAssignment({
                ...assignment,
                title: e.target.value,
              })
            )
          }
          className="form-control"
        />
        </label>
        <textarea
        onChange={(e) =>
          dispatch(
            selectAssignment({
              ...assignment,
              description: e.target.value,
            })
          )
        }
        value={assignment.description}
        className="form-control"
      />
      <div className="row mt-2">
        <div className="col-2">Points</div>
        <div className="col-4">
          <input
            onChange={(e) =>
              dispatch(
                selectAssignment({
                  ...assignment,
                  points: e.target.value,
                })
              )
            }
            value={assignment.points}
            className="form-control"
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
