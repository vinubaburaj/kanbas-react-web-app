import axios from "axios";
const COURSES_URL = "https://kanbas-node-server-app-7ro2.onrender.com/api/courses";
const MODULES_URL = "https://kanbas-node-server-app-7ro2.onrender.com/api/modules";

export const findModulesForCourses = async (courseId) => {
  const response = await axios.get(`${COURSES_URL}/${courseId}/modules`);
  return response.data;
};

export const createModuleForCourse = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_URL}/${courseId}/modules`,
    module
  );
  return response.data;
};

export const deleteModule = async (moduleId) => {
  const response = await axios.delete(`${MODULES_URL}/${moduleId}`);
  return response.data;
};

export const updateModule = async (module) => {
  const response = await axios.put(`${MODULES_URL}/${module._id}`, module);
  return response.data;
};
