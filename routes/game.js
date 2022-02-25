'use strict'

/*Роут (маршрут) - содержит информацию о будущей странице, её путь, какой контроллер использовать, заголовок, требования и т.д. */

const express = require('express')
const controller = require('../controller/game')
const router = express.Router()

// router.post('/login', controller.login) // функция-обрабочик маршрут. Сработает когда перейдём по адресу localhost:5000/api/auth/login
// router.post('/register', controller.register)

module.exports = router
