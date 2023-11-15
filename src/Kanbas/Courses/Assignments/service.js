import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:4000/api/" ;
const COURSES_URL = `${API_BASE}/courses`;
const ASSIGNMENT_URL = `${API_BASE}/assignments`;

export const findAssignmentsForCourses = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};

export const createAssignmentForCourse = async (courseId, assignment) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const deleteAssignment = async (assignmentId) => {
  const response = await axios.delete(`${ASSIGNMENT_URL}/${assignmentId}`);
  return response.data;
};

export const updateAssignment = async (assignmentId, assignment) => {
  const response = await axios.put(
    `${ASSIGNMENT_URL}/${assignmentId}`,
    assignment
  );
  return response.data;
};
