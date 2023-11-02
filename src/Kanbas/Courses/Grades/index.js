import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import { FaGear } from 'react-icons/fa6' 

function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  return (
    <div className="mt-2 me-3">
      <div className="wd-grades-header">
        <div className="row float-end">
          <button className="col btn btn-light me-2">Import</button>
          <button className="col btn btn-light me-2">Export</button>
          <button className="col btn btn-light me-2">
            <FaGear />
          </button>
        </div> 
      </div>

      <div className="wd-grades-searchbar">
        <form>
          <div className="form-group row">
            <div className="col">
              <label className="col-form-label col" for="student-search">
                Student Names
              </label>
            </div>
            <div className="col">
              <label className="col-form-label col-6" for="assignment-search">
                Assignment Names
              </label>
            </div>
          </div>

          <div className="form-group row">
            <div className="col">
              <input
                className="form-control"
                type="text"
                id="student-search"
                placeholder="Search Students"
              />
            </div>
            <div className="col">
              <input
                className="form-control"
                type="text"
                id="assignment-search"
                placeholder="Search Assignments"
              />
            </div>
          </div>
        </form>
      </div>

      <div className="table-responsive mt-3">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
            <th>Student Name</th>
            {assignments.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
            </tr>
          </thead>

          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find(
                (user) => user._id === enrollment.user
              );
              return (
                <tr>
                  <td id="wd-student-name">
                    {user.firstName} {user.lastName}
                  </td>
                  {assignments.map((assignment) => {
                    const grade = db.grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
