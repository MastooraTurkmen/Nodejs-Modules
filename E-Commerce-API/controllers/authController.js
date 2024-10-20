const register = async (req, res) => {
    res.send('User registered')
}

const login = async (req, res) => {
    res.send('User login')
}

const logout = async (req, res) => {
    res.send('User logout')
}


module.exports = { register, login, logout }