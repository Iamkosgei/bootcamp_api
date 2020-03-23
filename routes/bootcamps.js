const express = require('express');
const {
  getBootcamps,
  CreateBootcamps,
  getBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampInRadius
} = require('../controllers/bootcamps');

//include other resource router
const courseRouter = require('./courses');

const router = express.Router();

//Re-route into other resource router
router.use('/:bootcampId/courses', courseRouter);

router.route('/').get(getBootcamps);
router.route('/').post(CreateBootcamps);
router.route('/:id').get(getBootcamp);
router.route('/:id').put(updateBootcamp);
router.route('/:id').delete(deleteBootcamp);
router.route('/radius/:zipcode/:distance').get(getBootcampInRadius);

module.exports = router;
