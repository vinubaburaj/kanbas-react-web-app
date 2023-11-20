import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const URL = "http://localhost:4000/a5/assignment";

  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };

  const updateTitle = async () => {
    const response = await axios.get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };

  const updateScore = async () => {
    const response = await axios.get(`${URL}/score/${assignment.score}`);
    setAssignment(response.data);
  };

  const updateCompleted = async (e) => {
    const response = await axios.get(`${URL}/completed/${e.target.checked}`);
    setAssignment(response.data);
  };

  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>

      <input
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
        className="form-control mb-2 w-75"
        type="text"
      />
      <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>

      <input
        onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.value })
        }
        value={assignment.score}
        className="form-control mb-2 w-75"
        type="number"
      />
      <button onClick={updateScore} className="w-100 btn btn-primary mb-2">
        Update Score to: {assignment.score}
      </button>

      <label>
        Completed State:
        <input
          type="text"
          value={assignment.completed}
          readOnly
          class="form-control mb-2 w-75"
        />
      </label>

      <label>
        {" "}
        <input
          type="checkbox"
          checked={assignment.completed ? "checked" : ""}
          className="form-checkbox"
          onChange={(e) => updateCompleted(e)}
        />{" "}
        Completed
      </label>

      <h4>Retrieving Objects</h4>
      <button onClick={fetchAssignment}
              className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>
      <h4>Retrieving Properties</h4>
      <a
        href="http://localhost:4000/a5/assignment/title"
        className="btn btn-primary me-2"
      >
        Get Title
      </a>
    </div>
  );
}
export default WorkingWithObjects;
