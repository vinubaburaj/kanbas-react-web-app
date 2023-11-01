import { useNavigate, useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, selectAssignment } from "../assignmentsReducer";

const AddAssignment = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(addAssignment({ ...assignment, course: courseId }));
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <>
      <h6 className="mt-2">Add New Assignment</h6>
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
        <button className="btn btn-danger me-2" onClick={handleSave}>
          Save
        </button>
      </div>
    </>
  );
};

export default AddAssignment;
