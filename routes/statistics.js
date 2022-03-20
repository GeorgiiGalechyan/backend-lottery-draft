'use strict'

/*Роут (маршрут) - содержит информацию о будущей странице, её путь, какой контроллер использовать, заголовок, требования и т.д. */

// подключаем библиотеку express, для того чтобы потом использовать express.Router()
// express.Router() - класс для создания модульных, монтируемых обработчиков маршрутов
const express = require('express')
const router = express.Router()

const controller = require('../controllers/statistics')

// экземпляр express.Router() - обрабочик маршрута.
// Сработает когда перейдём по адресу localhost:5000/api/...
router.get('/global', controller.getGlobalStatistics) // показать рейтинг всех игроков || общую статистику
router.get('/:id', controller.getMeStatistics) // показать статистику игрока
router.delete('/:id', controller.deleteMeStatistics) // очистить (обнулить) статистику игрока

module.exports = router
