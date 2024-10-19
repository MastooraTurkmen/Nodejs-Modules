const express = require('express')
const app = express()


const port = process.env.PORT || 3000;

const start = async () => {
    try {
        app.listen(port, console.log(`Server is listening on Port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()