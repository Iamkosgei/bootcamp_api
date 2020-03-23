const Course = require('../models/Course');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc Get courses
// @route Get /api/v1/courses
// @route Get /api/v1/bootcamps/:bootcampId/courses
// @access Public
exports.getCourses = asyncHandler(async (req, res, next) => {
  let query;

  if (req.params.bootcampId) {
    query = Course.find({
      bootcamp: req.params.bootcampId
    });
  } else {
    query = Course.find();
  }

  const courses = await query;

  res.status(200).json({
    success: true,
    count: courses.length,
    data: courses
  });
});

// @desc add courses
// @route POSt /api/v1/courses
// @access Private
exports.CreateCourses = asyncHandler(async (req, res, next) => {
  const course = await Course.create(req.body);
  res.status(201).json({
    success: true,
    data: course
  });
});
