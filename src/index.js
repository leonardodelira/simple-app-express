const express = require('express')

const app = express();
const port = 8080

const todos = [];

app.get('/', (req, res) => {
  return res.status(200).json(todos)
})

app.post('/add', (req, res) => {
  todos.push(`item: ${new Date().getMilliseconds()}`)
  return res.status(200).json('Adicionado com sucesso!')
})

app.listen(port, () => console.log('server running at port ', port))
