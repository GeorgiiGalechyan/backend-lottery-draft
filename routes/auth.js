'use strict'

/*Роут (маршрут) - содержит информацию о будущей странице, её путь, какой контроллер использовать, заголовок, требования и т.д. */

// см. картинку по адресу https://mdn.mozillademos.org/files/14456/MVC%20Express.png

const express = require('express') // подключаем библиотеку express в константу express
const controller = require('../controller/auth') // импортирууем модуль
const router = express.Router() // express.Router - класс для создания модульных, монтируемых обработчиков маршрутов

// localhost:5000/api/auth/login
router.get('/login', controller.login) // функция сработает когда перейдём по адресу localhost:5000/api/auth/login

module.exports = router
