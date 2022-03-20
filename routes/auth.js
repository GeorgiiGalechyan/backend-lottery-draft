'use strict'

/*Роут (маршрут) - содержит информацию о будущей странице, её путь, какой контроллер использовать, заголовок, требования и т.д. */

// см. картинку по адресу https://mdn.mozillademos.org/files/14456/MVC%20Express.png

// подключаем библиотеку express, для того чтобы потом использовать express.Router()
// express.Router() - класс для создания модульных, монтируемых обработчиков маршрутов
const express = require('express')
const router = express.Router()

// импортируем модуль контроллера
// контроллер исполняется при переходе на url маршрута (route)
const controller = require('../controllers/auth')

// функция-обрабочик маршрута express.Router().
// Сработает когда перейдём по адресу: http://localhost:5000/api/auth/login
router.post('/login', controller.login)

// функция-обрабочик маршрута express.Router().
// Сработает когда перейдём по адресу: http://localhost:5000/api/auth/register
router.post('/register', controller.register)

// экспортируем модуль 'router', т.е. все модульные express.Router()
module.exports = router
