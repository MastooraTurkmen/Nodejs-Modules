const Order = require('../models/Order')
const Product = require('../models/Product')
const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors')
const { checkPermissions } = require('../utils')

const fakeStipeAPI = async ({ amount, currency }) => {
    const client_secret = 'someRandomValue';
    return { client_secret, amount }
}

const createOrder = async (req, res) => {
    const { items: cartItems, tax, shippingFee } = req.body

    if (!cartItems || cartItems.length < 1) {
        throw new CustomError.BadRequestError(`No Cart Items provided`)
    }

    if (!tax || !shippingFee) {
        throw new CustomError.BadRequestError(`Please prodive tax and shipping Fee`)
    }

    let orderItems = [];
    let subtotal = 0;

    for (const item of cartItems) {
        const dbProduct = await Product.findOne({ _id: item.product })
        if (!dbProduct) {
            throw new CustomError.NotFoundError(`No product with id: ${item.product}`)
        }
        const { name, price, image, _id } = dbProduct
        const singleOrderItem = {
            amount: item.amount,
            name,
            price,
            image,
            product: _id
        }

        //add item to order
        orderItems = [...orderItems, singleOrderItem]
        //calculate subtotal
        subtotal += item.amount * price
    }
    // calculate total
    const total = tax + shippingFee + subtotal

    // get client secret
    const paymentIntent = await fakeStipeAPI({
        amount: total,
        currency: 'usd'
    })

    const order = await Order.create({
        orderItems, total, subtotal, tax, shippingFee,
        clientSecret: paymentIntent.client_secret,
        user: req.user.userId
    })

    res.status(StatusCodes.CREATED).json({ order, clientSecret: order.clientSecret })
}

const getAllOrders = (req, res) => {
    console.log('get all orders');
}

const getSingleOrders = (req, res) => {
    console.log('get single orders');
}

const getCurrentUserOrders = (req, res) => {
    console.log('get current user orders');
}

const updateOrders = (req, res) => {
    console.log('update orders');
}

module.exports = {
    getAllOrders,
    getCurrentUserOrders,
    getSingleOrders,
    createOrder,
    updateOrders
}