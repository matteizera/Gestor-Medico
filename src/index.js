require('./database/config')
const express = require('express')

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, () => {
  console.log(`Servidor executando em http://localhost:${port}`)
})
