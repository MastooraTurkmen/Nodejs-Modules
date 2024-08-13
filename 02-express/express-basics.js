const express = require('express');
const app = express();
const { products } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home page</h1><a href="api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })

    res.json(newProducts)
})

app.get(`/api/products/:productID`, (req, res) => {
    const { productID } = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))

    if (!singleProduct) {
        return res.status(404).send('Product Does not Exit')
    }
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reivewID', (req, res) => {
    res.send('hello world')
})

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }
    if (sortedProducts.length < 1) {
        // res.status(200).send("no products matched your search")
         res.status(200).json({ success: true, data: [] })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000');
})