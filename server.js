const express = require('express')
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require('mongoose')


// ROUTERS
const clientAuth = require("./routes/clientAuth")

const app = express()
const port= process.env.PORT || 3001;
//configure doten
dotenv.config()
app.use(cors()) //ENABELING CORS

// MIDDLEWARES
app.use(express.json())
//connect to mongodb database using Mongoose and the connection string from .env file
mongoose.connect(process.env.MONGODB_URL,{}).then(resp=>{
    app.listen(port, ()=>{
        console.log(`Server is running on ${port}`)
        console.log("Connected to DB")
    })
})



// ROUTES
app.use('/client',clientAuth)



