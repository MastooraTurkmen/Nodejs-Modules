const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')

const login = async (req, res) => {
    const { username, password } = req.body;

    // mongoose validation
    // Joi
    // check in the controller

    if (!username || !password) {
        throw new BadRequestError('Please Provide email and password')
    }

    const id = new Date().getTime()

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiresIn: '30d' })

    res.status(200).json({ msg: 'user created', token })
}

const dashboard = async (req, res) => {
    console.log(req.user);

    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({
        msg: `Hello ${req.user.username}`,
        secret: `Here is your data, your lucky number is ${luckyNumber}`
    })

}

module.exports = { login, dashboard }