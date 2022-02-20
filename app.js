'use strict' // строгий режим

const express = require('express') // кодключаем библиотеку express в константу express
const authRoutes = require('./routes/auth') // регистрируем роуты (маршруты)
const app = express()

// app.use позволяет подключать плагины или роуты

app.use('/api/auth', authRoutes)

module.exports = app
