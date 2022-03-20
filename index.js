'use strict'

// В index.js импортируется модуль app.js, который содержит библиотеку express.js и маршруты (routes).
// При запуске index.js запускается сервер c прослушкой через функцию app.listen([port[, host[, backlog]]][, callback]

const app = require('./app')
require('dotenv').config() // модуль dotenv - позволяет создавать переменные среды в файле в формате .env
// {path: path/filename'}

// переменные из файла .env
const port = process.env.PORT || 5000
const host = process.env.HOST || localhostDefault

app.listen(port, () =>
  console.log(`Server is listening http://${host}:${port}`)
)
