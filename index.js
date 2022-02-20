const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Georgii!')
})

app.listen(port, () => {
  console.log(`Server is starting on port ${port}`)
})
