'use strict'

// Контроллер - объект, отвечающий за формирование результата по запрошенному маршруту.
// см. картинку по адресу https://mdn.mozillademos.org/files/14456/MVC%20Express.png

// экспортируем модуль 'login' и сразу описывам содержимое
module.exports.login = function (req, res) {
  res.status(200).json({
    login: 'from controller',
  })
}

// экспортируем модуль 'register' и сразу описывам содержимое
module.exports.register = function (req, res) {
  res.status(200).json({
    register: 'from controller',
  })
}
