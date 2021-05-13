const express = require('express')
const app = express()
require('dotenv').config()

const { errorHandler } = require('./middlewares/errorHandler.js')
const { routeNotFound } = require('./middlewares/routeNotFound.js')

const {  intializeDBConnection } = require('./db/db.connect.js')

intializeDBConnection()

app.get('/', (req,res) => {
  res.send({ "API" : "Unusual" })
})


app.use(routeNotFound)

app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`)
})