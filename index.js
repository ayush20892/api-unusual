const express = require('express')
const app = express()
var cors = require('cors')
require('dotenv').config()

const { errorHandler } = require('./middlewares/errorHandler.js')
const { routeNotFound } = require('./middlewares/routeNotFound.js')

const {  intializeDBConnection } = require('./db/db.connect.js')



const originlist = ["https://unusual-ecom.netlify.app", "http://localhost:8000"];
const corsOptions = {
  origin: function (origin, callback) {
      if (originlist.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
      } else {
          callback(new Error("Not allowed by CORS"));
      }
  },
  optionsSuccessStatus: 200,
};


intializeDBConnection()

app.use(cors(corsOptions));



app.get('/', (req,res) => {
  res.send({ success: true, meesage: "API for Unusual" })
})






app.use(routeNotFound)

app.use(errorHandler)

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`)
})