import express from 'express';
import getPatients from '../services/patientService';
import patientService from '../services/patientService';
import cors from 'cors';
import { toNewPatientEntry } from '../util';

const app = express();

app.use(cors());

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(getPatients.getNonSensitivePatientEntries());
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);

    const addedEntry = patientService.addPatient(newPatientEntry);
    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
