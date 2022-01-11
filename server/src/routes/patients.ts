import express from 'express';
import getPatients from '../services/patientService';
import cors from 'cors';

const app = express();

app.use(cors());

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(getPatients.getNonSensitivePatientEntries());
});

router.post('/', (_req, res) => {
  res.send('Saving a diary!');
});

export default router;
