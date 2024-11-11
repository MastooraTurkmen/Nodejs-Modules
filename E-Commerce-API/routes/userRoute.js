const { getAllUsers, getSingleUser, updateUser, updateUserPassword, showCurrentUser } = require('../controllers/userController')
const express = require('express')
const router = express.Router()
const { authenticateUser, authorizePermission } = require('../middleware/authentication')

router.route('/').get(authenticateUser, authorizePermission('admin'), getAllUsers);

router.route('/showMe').get(authenticateUser, showCurrentUser);
router.route('/updateUserPassword').patch(updateUserPassword)
router.route('/updateUser').patch(updateUser)

router.route('/:id').get(authenticateUser, getSingleUser);

module.exports = router