import express from 'express';
import ciphersRouter from './routes/ciphers';

const app = express();
const port = 8000;

app.use(express.json());
app.use('/', ciphersRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});