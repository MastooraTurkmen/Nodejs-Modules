const { getAllUsers, getSingleUser, updateUser, updateUserPassword, showCurrentUser } = require('../controllers/userController')
const express = require('express')
const router = express.Router()

router.route('/').get(getAllUsers);

router.route('/showMe').get(showCurrentUser);
router.route('/updateUserPassword').patch(updateUserPassword)
router.route('/updateUser').patch(updateUser)

router.route('/:id').get(getSingleUser);

module.exports = router