const mongoose = require('mongoose')
const Shema = mongoose.Schema

const gameShema = new Shema({
  id: '',
  name: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    default: '',
  },
})
