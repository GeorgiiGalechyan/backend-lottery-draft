'use strict'

/*Роут (маршрут) - содержит информацию о будущей странице, её путь, какой контроллер использовать, заголовок, требования и т.д. */

const express = require('express')
const controller = require('../controller/statistics')
const router = express.Router()

// функция-обрабочик маршрут. Сработает когда перейдём по адресу localhost:5000/api/...
router.get('/', controller.getGlobalStatistics)
router.get('/:id', controller.getMeStatistics)
router.delete('/', controller.deleteMeStatistics)

module.exports = router
