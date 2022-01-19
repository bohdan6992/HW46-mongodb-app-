const { createStudent, getAllStudents, deleteStudentById, getStudentById, updateStudentById, getStudentsByClass, getStudentsCount} = require('../model/students')

const students = {
  getAllStudents: async () => {
    return await getAllStudents();
  },
  deleteStudent: async (req) => {
    await deleteStudentById(req.params.id);
  },
  createStudent: async (obj) => {
    await createStudent(obj);
  },
  getStudentById: async (id) => {
    return await getStudentById(id);
  },
  updateStudentById: async (obj) => {
    await updateStudentById(obj);
  },
  getStudentsByClass: async (className) => {
    return await getStudentsByClass(className);
  },
  getStudentsCount: async (className) => {
    return await getStudentsCount(className);
  },
};

module.exports = students;