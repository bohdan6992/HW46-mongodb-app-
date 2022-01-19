const Student = require('./schemas/students');

const createStudent = async (obj) => {
  const student = new Student({
    name: obj.name,
    surname: obj.surname,
    gender: obj.gender,
    age: obj.age,
    birthDate: obj.birthDate,
    health: {
      blood: obj.blood,
      resus: obj.resus,
      width: obj.width,
      weight: obj.weight,
    },
    family: {
      father: {
        name: obj.fatherName,
        surname: obj.fatherSurname,
        number: obj.fatherNumber,
      },
      mother: {
        name: obj.motherName,
        surname: obj.motherSurname,
        number: obj.motherNumber,
      },
    },
    adress: obj.adress,
    class: obj.class,
    classNumber: obj.classNumber,
    education: {
      name: obj.name,
      marks: obj.marks,
    },
  });
  try {
    await student.save();
  } catch (err) {
    console.log(err)
  };
}

const getAllStudents = async () => {
  const student = await Student.find({});
  return student; 
}

const deleteStudentById = async(id) => {
  await Student.deleteOne({_id: id});
}

const getStudentById = async (id) => {
  const student = await Student.find({_id: id});
  return student[0];
}

const updateStudentById = async(obj) => {
  await Student.findOneAndUpdate(
    {_id: obj.id},
    {
      name: obj.name,
      surname: obj.surname,
      gender: obj.gender,
      age: obj.age,
      birthDate: obj.birthDate,
      health: {
        blood: obj.blood,
        resus: (obj.resus !== '0')? true : false,
        width: obj.width,
        weight: obj.weight,
      },
      family: {
        father: {
          name: obj.fatherName,
          surname: obj.fatherSurname,
          number: obj.fatherNumber,
        },
        mother: {
          name: obj.motherName,
          surname: obj.motherSurname,
          number: obj.motherNumber,
        },
      },
      adress: obj.adress,
      class: obj.class,
      classNumber: obj.classNumber,
      education: {
        name: obj.name,
        marks: obj.marks,
      },
    }
  ) 
}

const getStudentsByClass = async (className) => {
  const student = await Student.find({ class: className });
  return student; 
}

const getStudentsCount = async (className) => {
  const count = await Student.countDocuments({ class: className });
  return count; 
}

module.exports = {
  createStudent,
  getAllStudents,
  deleteStudentById,
  getStudentById,
  updateStudentById,
  getStudentsByClass,
  getStudentsCount,
}

