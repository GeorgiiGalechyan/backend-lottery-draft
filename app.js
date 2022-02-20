'use strict'

// В модуле app.js мы подключаем фреймворк express.js, импортируем маршруты (routes) и регистриуем эти маршруты через app.use([path,] callback [, callback...])
// app.js экспортируется в index.js

const express = require('express') // подключаем библиотеку express в константу express
const authRoutes = require('./routes/auth') // регистрируем роуты (маршруты)
const app = express()

// app.use([path,] callback [, callback...]) , т.е. мы регистрирум маршрут (route): "путь" и "callback-функцию")
app.use('/api/auth', authRoutes)

module.exports = app
