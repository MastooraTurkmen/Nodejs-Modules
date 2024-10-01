const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => console.log('Connected to DB')).catch((err) => console.log(err))
}

module.exports = connectDB