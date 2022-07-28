'use strict';

const express = require('express');
const bodyParser = require('body-parser')
// App
const app = express();
app.use(bodyParser.json())
app.use(express.json());


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hello World');
});

// items
const courses = [
  { id: 1, name: 'item1'},
  { id: 2, name: 'item2'},
  { id: 3, name: 'item3'},
]

// GET /api/items
app.get('/api/items', (req, res) => {
  res.send(items)
})

// POST /api/items
app.post('/api/items', (req, res) => {
  const items = {
    id: items.length + 1,
    name: req.body.name
  }
  items.push(item)
  res.send(item)
  console.log(item)
})

// GET /api/items/1
app.get('/api/items/:id', (req, res) => {
  const item = items.find(c => c.id === parseInt(req.items.id))
  if (!item) res.status(404).send('The item with the given ID was not found')
  res.send(item)
})
// PUT  /api/courses/1
// DELETE /api/courses/1

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
