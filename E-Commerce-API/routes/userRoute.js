const { getAllUsers, getSingleUser, updateUser, updateUserPassword, showCurrentUser } = require('../controllers/userController')
const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../middleware/authentication')

router.route('/').get(getAllUsers);

router.route('/showMe').get(showCurrentUser);
router.route('/updateUserPassword').patch(updateUserPassword)
router.route('/updateUser').patch(updateUser)

router.route('/:id').get(getSingleUser);

module.exports = router