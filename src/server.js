'use strict';
const Joi = require('joi');
const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron'); // cron: 
const date = require('date-utils'); // date timestamp
process.env.TZ = 'Asia/Tokyo'; // set the timezone Japan Standard Time

// ---  connect to mongodb --- //
const {MongoClient} = require('mongodb');
async function main() {
}

// cron unix time
cron.schedule('* * * * * ', () => console.log(`*****: 毎分実行:  ${Math.floor(new Date().getTime() / 1000)}`));

// App
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(express.json());

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
  res.send('Hello World');
});

// courses
const courses = [
  { id: 1, name: 'course1'},
  { id: 2, name: 'course2'},
  { id: 3, name: 'course3'},
]

// GET /api/courses
app.get('/api/courses', (req, res) => {
  res.send(courses)
})

// POST /api/courses
app.post('/api/courses', (req, res) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  res.send('400 error');

  const course = {
    id: courses.length + 1,
    name: req.body.name
  }
  courses.push(course);
  res.send(course);
})

// GET /api/courses/1
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id))
  if (!course) return res.status(404).send('The course with the given ID was not found')
  res.send(course)
})

// PUT  /api/courses/1
app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id) );
  if (!course) return res.status(400).send('The course with the given ID was not found.');
  
  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  course.name = req.body.name;
  res.send(course);
});

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(course);
}

// DELETE /api/courses/1
app.delete('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id) );
  if (!course) return res.status(400).send('The course with the given ID was not found.');

  // Delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// connect mongodb server
const URL = 'mongodb://username:password@mongo/appdb?authSource=admin'
const client = new MongoClient(URL)


try {
  // await
  client.connect();
  console.log('Succesfully connected to mongo.');
} catch (e) {
  // error
  console.log(e);
}
