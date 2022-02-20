'use strict'

// В index.js импортируется модуль app.js, который содержит библиотеку express.js и маршруты (routes).
// При запуске index.js запускается сервер c прослушкой через функцию app.listen([port[, host[, backlog]]][, callback]

const app = require('./app')

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server is starting on port ${port}`))
