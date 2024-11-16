const express = require('express')
const router = express.Router()
const { authenticateUser, authorizePermission } = require('../middleware/authentication')

const { deleteProduct, updateProduct, uploadImage, getAllProducts, getSingleProduct, createProduct } = require('../controllers/productController')