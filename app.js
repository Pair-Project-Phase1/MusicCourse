"use strict"
require('dotenv').config()

const express = require('express')
const router = require('./routes')
const app = express()
const port = process.env.PORT || 4000

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})