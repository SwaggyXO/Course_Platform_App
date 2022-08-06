const express = require('express');
const router = express.Router();

const {getAllUsers, createNewUser, getOneUser} = require('../controllers/controller_user');
const {getAllCourses, createNewCourse} = require('../controllers/controller_course');
const { getAllLoginUsers, createNewUserLogin } = require('../controllers/controller_user_login');

router.route('/').post(createNewUserLogin)
router.route('/register').post(createNewUser)
router.route('/home').get(getAllCourses)
router.route('/home/:u_ID').get(getOneUser)
router.route('/addCourse').post(createNewCourse)

module.exports = router;