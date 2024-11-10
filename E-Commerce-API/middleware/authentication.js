const CustomErr = require('../errors')
const { isTokenValid } = require('../utils')

const authenticateUser = async (req, res, next) => {
    const token = req.signedCookies.toekn
    if (!token) {
        throw new CustomErr.UnauthenticatedError("Authentication Invalid")
    }

    try {
        const { name, userId, role } = isTokenValid({ token })
        req.user = { name, userId, role }
        console.log(payload);
        next()
    } catch (error) {
        throw new CustomErr.UnauthenticatedError("Authentication Invalid")
    }
}

module.exports = { authenticateUser }