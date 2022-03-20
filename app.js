'use strict'

// В модуле app.js мы подключаем фреймворк express.js, импортируем маршруты (routes) и регистриуем эти маршруты через app.use([path,] callback [, callback...])
// app.js экспортируется в index.js

const express = require('express') // подключаем библиотеку express в константу express

// регистрируем роуты (маршруты)
const authRoutes = require('./routes/auth')
const gameRoutes = require('./routes/game')
const statisticsRoutes = require('./routes/statistics')

const app = express()

// app.use([path,] callback [, callback...]) , т.е. мы регистрирум маршрут (route): "путь" и "callback-функцию")
app.use('/api/auth', authRoutes)
app.use('/api/game', gameRoutes)
app.use('/api/statistics', statisticsRoutes)

module.exports = app
