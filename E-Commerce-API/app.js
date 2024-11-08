require('dotenv').config()
require('express-async-errors')

const express = require('express')
const app = express()

const morgon = require('morgan')
const cookiesParser = require('cookie-parser')
const authRoutes = require('./routes/authRoutes')

// database
const connectDB = require('./db/connect')

// middleware
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())
app.use(morgon('tiny'))
app.use(cookiesParser(process.env.JWT_SECRET))

app.get('/', (req, res) => {
    res.send('e commerce api')
})

app.get('/api/v1', (req, res) => {
    console.log(req.signedCookies);
    res.send('e commerce api')
})

app.use('/api/v1/auth', authRoutes)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on Port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()