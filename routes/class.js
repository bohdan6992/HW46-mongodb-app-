const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer();
const students = require('../controller/students')

router.get('/', async (req, res) => {
  const studentsList = await students.getStudentsByClass("Math");
  const mathStudCount = await students.getStudentsCount("Math");
  const filStudCount = await students.getStudentsCount("Filology");
  const natStudCount = await students.getStudentsCount("Nature");
  const allStudCount = mathStudCount + filStudCount + natStudCount;
  res.render('class', { studentsList: studentsList, mathStudCount: mathStudCount, filStudCount: filStudCount, natStudCount: natStudCount, allStudCount: allStudCount });
});

router.get('/math', async (req, res) => {
  const studentsList = await students.getStudentsByClass("Math");
  res.render('mathClass', { studentsList: studentsList });
});

router.get('/filology', async (req, res) => {
  const studentsList = await students.getStudentsByClass("Filology");
  res.render('filologyClass', { studentsList: studentsList });
});

router.get('/nature', async (req, res) => {
  const studentsList = await students.getStudentsByClass("Nature");
  res.render('natureClass', { studentsList: studentsList });
});

// router.get('/delete/:id', async (req, res, next) => {
//   await students.deleteStudent(req);
//   res.redirect(`/admin`);
// });

// router.get('/create', async (req, res, next) => {
//   res.render('adminCreate')
// });

// router.post('/create', upload.none(), async (req, res, next) => {
//   await students.createStudent(req.body);
//   res.send(`Hello ${req.body.name}`);
// });

// router.get('/:id', async (req, res, next) => {
//   const student = await students.getStudentById(req.params.id);
//   res.render('adminUpdate', {student: student})
// });

// router.post('/:id', upload.none(), async (req, res, next) => {
//   await students.updateStudentById(req.body);
//   res.send('update is ok')
// });

module.exports = router;