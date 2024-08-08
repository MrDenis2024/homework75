import express from 'express';
import ciphersRouter from './routes/ciphers';
import cors, {CorsOptions} from 'cors';

const app = express();
const port = 8000;

const whiteList = ['http://localhost:5173'];
const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (origin && whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/', ciphersRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});