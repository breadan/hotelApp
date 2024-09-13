import express from 'express';
import userRouter from './src/router/user.route';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', userRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
