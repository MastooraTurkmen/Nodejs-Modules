const getAllUser = async (req, res) => {
    res.send('get all users route')
}

const getSingleUser = async (req, res) => {
    res.send('get sing users route')
}
const showCurrentUser = async (req, res) => {
    res.send('show current users route')
}

const updateUser = async (req, res) => {
    res.send('update users route')
}

const updateUserPassword = async (req, res) => {
    res.send('get all users route')
}

module.exports = {
    getAllUser, getSingleUser, updateUser, updateUserPassword, showCurrentUser
}