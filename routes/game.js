'use strict'

/*Роут (маршрут) - содержит информацию о будущей странице, её путь, какой контроллер использовать, заголовок, требования и т.д. */

const express = require('express')
const controller = require('../controller/game')
const router = express.Router()

// функция-обрабочик маршрут. Сработает когда перейдём по адресу localhost:5000/api/...
router.get('/', controller.getAllGames)
router.post('/', controller.generateTicket)
router.post('/', controller.startDrawSchedule)
router.post('/', controller.startDrawNow)
router.get('/:id', controller.checkTicket)

module.exports = router
