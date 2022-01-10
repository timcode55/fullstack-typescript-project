import express from 'express';
import getDiagnoses from '../services/diagnosesService';
import cors from 'cors';

const app = express();

app.use(cors());

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(getDiagnoses.getDiagnoses());
});

router.post('/', (_req, res) => {
  res.send('Saving a diary!');
});

export default router;
