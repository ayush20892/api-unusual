const express = require('express')
const app = express()
var cors = require('cors')
require('dotenv').config()

// importing middlewares
const { errorHandler } = require('./middlewares/errorHandler.js')
const { routeNotFound } = require('./middlewares/routeNotFound.js')
const { corsOptions } = require('./middlewares/corsOptions.js')

const {  intializeDBConnection } = require('./db/db.connect.js')



app.use(cors(corsOptions));


intializeDBConnection()



app.get('/', (req,res) => {
  res.send({ success: true, meesage: "API for Unusual" })
})






app.use(routeNotFound)

app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`)
})