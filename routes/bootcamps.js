const express = require('express');
const {
  getBootcamps,
  CreateBootcamps,
  getBootcamp,
  updateBootcamp,
  deleteBootcamp
} = require('../controllers/bootcamps');

const router = express.Router();

router.route('/').get(getBootcamps);
router.route('/').post(CreateBootcamps);
router.route('/:id').get(getBootcamp);
router.route('/:id').put(updateBootcamp);
router.route('/:id').delete(deleteBootcamp);

module.exports = router;
