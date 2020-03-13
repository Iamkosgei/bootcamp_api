const express = require('express');
const {
  getBootcamps,
  CreateBootcamps,
  getBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampInRadius
} = require('../controllers/bootcamps');

const router = express.Router();

router.route('/').get(getBootcamps);
router.route('/').post(CreateBootcamps);
router.route('/:id').get(getBootcamp);
router.route('/:id').put(updateBootcamp);
router.route('/:id').delete(deleteBootcamp);
router.route('/radius/:zipcode/:distance').get(getBootcampInRadius);

module.exports = router;
