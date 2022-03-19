'use strict'

/*Роут (маршрут) - содержит информацию о будущей странице, её путь, какой контроллер использовать, заголовок, требования и т.д. */

const express = require('express')
const controller = require('../controller/game')
const router = express.Router()

// функция-обрабочик маршрут. Сработает когда перейдём по адресу localhost:5000/api/...
router.get('/', controller.getAllGames) // показать все возможные игры
router.post('/', controller.generateTicket) // сгенерировать билет
router.post('/', controller.startDrawSchedule) // начать розыгрыша тиража (по расписанию)
router.post('/', controller.startDrawNow) // принудительно начать розыгрыш тиража
router.get('/:id', controller.checkTicket) // проверить билеты

module.exports = router
