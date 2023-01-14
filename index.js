const express = require('express')
const exhdb = require('express-handlebars')
const path = require('path')
const mysql = require('mysql')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('views', path.resolve(__dirname, 'views' ))
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('view engine', 'handlebars')
app.engine('handlebars', exhdb.engine())
app.use(express.json())
/* routes */
app.get('/', (req, res) => {
  res.render('home')
})

const port = 3400
app.listen(port, () => {
  console.log(`Servidor aberto na porta ${port}`)
})