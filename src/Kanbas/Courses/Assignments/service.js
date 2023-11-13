import axios from "axios";

const COURSES_URL = "http://localhost:4000/api/courses";
const ASSIGNMENT_URL = "http://localhost:4000/api/assignments";

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
