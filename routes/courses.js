const express = require('express');
const { getCourses, CreateCourses } = require('../controllers/courses');

const router = express.Router({ mergeParams: true });

router.route('/').get(getCourses);
// router.route('/bootcamps/:bootcampId/courses').get(getCourses);
router.route('/').post(CreateCourses);

module.exports = router;
