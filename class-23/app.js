


const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// parse application/json
app.use(bodyParser.json())

const port = 3000
const data = require('./data.json')

// file read
const fs = require('fs')
const path = require('path')
const dataPath = path.join(__dirname, 'data.json')



app.get('/', (req, res) => {
    res.send('Application is running! Port: ' + port)
})

app.get('/health', (req, res) => {
    res.send('Application health is 100%')
})
// get all products and filter by name + Home task include minPrice and maxPrice
app.get('/products', (req, res) => {
    try {
        const query = req.query
        console.log('query:', query)
        // in the future i have to query with 3 parameter name,description, price
        if (query.name) {
            const { name } = req.query
            const filteredDate = data.filter(
                product => product.name.toLowerCase().includes(name)
            )
            console.log('filter by name', filteredDate)
            res.json(filteredDate)
        } else {
            res.json(data)
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
// get product by id
app.get('/products/:id', (req, res) => {
    try {
        const id = req.params.id
        const findProduct = data.find(product => product.id === parseInt(id))
        if (!findProduct) {
            return res.status(404).json({ message: 'Product not found' })
        }

        res.status(200).json(findProduct)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.post('/products', (req, res) => {
    try {
        const { name, price, description, category, url } = req.body
        if (!name || !price) {
            return res.status(400).json({ message: 'Name and price are required' })
        }
        console.log('Req 2::', req.body)
        // load data from file
        const data = require('./data.json') // load 2gb of file
        const newId = data.length > 0 ? Math.max(...data.map(p => p.id)) + 1 : 1
        const newData = {
            id: newId,
            name,
            price,
            description,
            category,
            url
        }
        data.push(newData) // 2gb data push
        // 2gb file write
        fs.writeFileSync(dataPath, JSON.stringify(data))
        console.log('Product created successfully')
        res.status(201).json({ message: 'Product created successfully' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// delete product

// update product
app.put('/product/:id', (req, res) => {
    try {
        const id = req.params.id
        const findProduct = data.find(product => product.id === parseInt(id))
        if (!findProduct) {
            return res.status(404).json({ message: 'Product not found' })
        }
        // const { name, price, description, category, url } = req.body
        // findProduct.name = name
        // findProduct.price = price
        // findProduct.description = description
        // findProduct.category = category
        // findProduct.url = url

        // load data and update
        // const data = require('./data.json')
        // const index = data.findIndex(product => product.id === parseInt(id))
        // data[index] = findProduct
        
    } catch (error) {
        
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

