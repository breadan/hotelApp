import express from 'express';
import prisma from './prisma';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', (req, res) => {
  prisma.user.findMany().then((users) => {
    res.json(users);
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
