const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

var currentUser;

var corsOptions = {
  orgim: '/',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.listen(3100, () => {
  console.log('Server Started!');
});

app.route('/api/courses').get((request, response) => {
  response.send(COURSES);
});

app.route('/api/courses').post((request, response) => {
  let course = request.body;

  const firstId = COURSES ? Math.max.apply(null, COURSES.map(courseIterator => courseIterator.id)) + 1 : 1;
  course.id = firstId;
  COURSES.push(course);
  

  response.status(201).send(course);
});

app.route('/api/courses/:id').put((request, response) => {
  const courseId = +request.params['id'];
  const course = request.body;

  const index = COURSES.findIndex(courseIterator => courseIterator.id === courseId);
  COURSES[index] = course;

  response.status(200).send(course);
});

app.route('/api/courses/:id').get((request, response) => {
  const courseId = +request.params['id'];

  response.status(200).send(COURSES.find(courseIterator => courseIterator.id === courseId));
});

app.route('/api/courses/:id').delete((request, response)=> {
  const courseId = +request.params['id'];
  COURSES = COURSES.filter(courseIterator => courseIterator.id !== courseId);
  
  response.status(204).send({});
});

var COURSES = [
    {
        id: 1,
        imageUrl: '/assets/imgs/angular1.jpg',
        code: '1122',
        name: 'Angular Básico',
        price: 250.0,
        description: ' Aqui vai aprender Angular',
        releaseDate: '25/07/2022',
        workload: 120,
        startData: '28/07/2022',
        endData: '12/09/2022',
        rating: 3.5,

      },
      {
        id: 2,
        imageUrl: '/assets/imgs/angular2.jpg',
        code: '2233',
        name: 'Angular Intermediário',
        price: 450.6,
        description: ' Aqui vai aprender Angular',
        releaseDate: '25/07/2022',
        workload: 160,
        startData: '30/07/2022',
        endData: '20/09/2022',
        rating: 4.2,
      },
      {
        id: 3,
        imageUrl: '/assets/imgs/angular3.jpg',
        code: '3344',
        name: 'Angular Avançado',
        price: 330.7,
        description: ' Aqui vai aprender Angular',
        releaseDate: '25/07/2022',
        workload: 250,
        startData: '01/10/2022',
        endData: '25/11/2022',
        rating: 4.8,
      },
      {
        id: 4,
        imageUrl: '/assets/imgs/java.jpg',
        code: '1100',
        name: 'Java Básico',
        price: 250.0,
        description: ' Aqui vai aprender Java',
        releaseDate: '25/07/2022',
        workload: 80,
        startData: '28/07/2022',
        endData: '12/09/2022',
        rating: 5,
      },
      {
        id: 5,
        imageUrl: '/assets/imgs/java2.jpg',
        code: '2211',
        name: 'Java Intermediário',
        price: 450.6,
        description: ' Aqui vai aprender Java',
        releaseDate: '25/07/2022',
        workload: 220,
        startData: '30/07/2022',
        endData: '20/09/2022',
        rating: 3.7,
      },
      {
        id: 6,
        imageUrl: '/assets/imgs/java3.jpeg',
        code: '3322',
        name: 'Java Avançado',
        price: 470.5,
        description: ' Aqui vai aprender Java',
        releaseDate: '25/07/2022',
        workload: 220,
        startData: '01/10/2022',
        endData: '25/11/2022',
        rating: 4.5,
      },

];

