import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = express.Router();

// Link the route / to the AppController
router.get('/', AppController.getHomepage);

// Link the routes /students and /students/:major to the StudentsController
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
