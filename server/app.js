const express = require('express')
const routes = require('./routes/')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cloudinary = require('cloudinary')

const app = express()
const router = express.Router()
const url = process.env.MONGODB_URI || "mongodb://localhost:27018/medium"

// Configure cloudinary
cloudinary.config({
    cloud_name: 'chidmennamdi',
    api_key: '',
    api_secret: ''
})

// Connect MongoDB 
try {
    mongoose.connect(url, {
        // useMongoClient: true
    })
} catch (error) {

}

let port = 5000 || process.env.port

// Setup routes (API Endpoints)
routes(router)

// Setup middleware
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())
// app.use('/static', express.static(path.join(__dirname,'static)))

app.use('api', router)

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});