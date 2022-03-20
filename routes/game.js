'use strict'

/*Роут (маршрут) - содержит информацию о будущей странице, её путь, какой контроллер использовать, заголовок, требования и т.д. */

// подключаем библиотеку express, для того чтобы потом использовать express.Router()
// express.Router() - класс для создания модульных, монтируемых обработчиков маршрутов
const express = require('express')
const router = express.Router()

// импортируем модуль контроллера
const controller = require('../controllers/game')

// функция-обрабочик маршрут. Сработает когда перейдём по адресу localhost:5000/api/...
router.get('/', controller.getAllGames) // показать все возможные игры
router.post('/', controller.generateTicket) // сгенерировать билет
router.post('/', controller.startDrawSchedule) // начать розыгрыша тиража (по расписанию)
router.post('/', controller.startDrawNow) // принудительно начать розыгрыш тиража
router.get('/:id', controller.checkTicket) // проверить билеты

// экспортируем модуль 'router', т.е. все модульные express.Router()
module.exports = router
