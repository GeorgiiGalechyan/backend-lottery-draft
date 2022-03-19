'use strict'

/*Роут (маршрут) - содержит информацию о будущей странице, её путь, какой контроллер использовать, заголовок, требования и т.д. */

const express = require('express')
const controller = require('../controller/statistics')
const router = express.Router()

// функция-обрабочик маршрут. Сработает когда перейдём по адресу localhost:5000/api/...
router.get('/global', controller.getGlobalStatistics) // показать рейтинг всех игроков || общую статистику
router.get('/:id', controller.getMeStatistics) // показать статистику игрока
router.delete('/:id', controller.deleteMeStatistics) // очистить (обнулить) статистику игрока

module.exports = router
