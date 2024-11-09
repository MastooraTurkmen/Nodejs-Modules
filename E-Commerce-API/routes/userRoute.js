const { getAllUsers, getSingleUser, updateUser, updateUserPassword, showCurrentUser } = require('../controllers/userController')
const express = require('express')
const router = express.Router()

router.route('/').get(getAllUsers);
router.route('/showMe').get(showCurrentUser);
router.route('/:id').get(getSingleUser);
router.route('/updateUserPassword').post(updateUserPassword)
router.route('/updateUser').post(updateUser)

module.exports = router