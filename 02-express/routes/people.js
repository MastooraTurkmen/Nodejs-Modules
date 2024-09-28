const express = require('express')
const router = express.Router();
const { getPeople, createPeople, createPersonPostman, updatePerson, deletePerson } = require('../controllers/people')

router.route('/').get(getPeople).post(createPeople);
router.route('/postman').post(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

module.exports = router;