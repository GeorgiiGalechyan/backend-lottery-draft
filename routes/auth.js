'use strict'

/*Роут (маршрут) - содержит информацию о будущей странице, её путь, какой контроллер использовать, заголовок, требования и т.д. */

// см. картинку по адресу https://mdn.mozillademos.org/files/14456/MVC%20Express.png

const express = require('express') // подключаем библиотеку express в константу express, для тго чтобы потом использовать express.Router()
const controller = require('../controller/auth') // импортируем модуль контроллера, который исполняется при переходе на url маршрута
const router = express.Router() // express.Router - класс для создания модульных, монтируемых обработчиков маршрутов

// localhost:5000/api/auth/login
router.post('/login', controller.login) // функция-обрабочик маршрут. Сработает когда перейдём по адресу localhost:5000/api/auth/login

router.post('/register', controller.register) // функция-обрабочик маршрут. Сработает когда перейдём по адресу localhost:5000/api/auth/register

module.exports = router
