const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer();
const students = require('../controller/students')

router.get('/', async (req, res) => {
  const studentsList = await students.getAllStudents();
  res.render('medcard', { studentsList: studentsList });
});

router.get('/:id', async (req, res) => {
  const student = await students.getStudentById(req.params.id);
  res.render('medcardUpdate', {student: student})
});

router.post('/:id', upload.none(), async (req, res) => {
  await students.updateStudentById(req.body);
});

module.exports = router;