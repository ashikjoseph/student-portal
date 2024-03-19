const express = require('express')
const studentController = require('../Controllers/studentController')

const router = new express.Router();

// define paths

router.post('/student/register',studentController.register)
router.get('/student/getallstudents',studentController.getallstudents)

// get all student with specific name
router.get('/student/getwithname',studentController.getStudentWithName)

// update 
router.put('/student/update/:id',studentController.updateStudent)


module.exports = router;
