const createOrder = (req, res) => {
    console.log('create order');
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