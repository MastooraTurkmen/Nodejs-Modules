const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const path = require('path')
const cloudinary = require('cloudinary').v2

const uploadProductImageLocal = async (req, res) => {
    if (!req.files) {
        throw new CustomError.BadRequestError('No file Uploaded')
    }

    const productImage = req.files.image;

    if (!productImage.mimetype.startsWith('image')) {
        throw new CustomError.BadRequestError('Please Upload image')
    }

    const maxSize = 1024 * 1024;
    if (productImage.size > maxSize) {
        throw new CustomError.BadRequestError('Please Upload image smaller than 1KB')
    }

    const imagePath = path.join(__dirname, '../public/uploads/' + `${productImage.name}`)
    await productImage.mv(imagePath)
    return res.status(StatusCodes.OK).json({ image: { src: `/uploads/${productImage.name}` } })
}

const uploadProductImage = async (req, res) => {
    const result = await cloudinary.uploader.upload()
}

module.exports = { uploadProductImage, uploadProductImageLocal }