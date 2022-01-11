import patients from '../../data/patients';
import { v1 as uuid } from 'uuid';
const id = uuid();

import {
  newPatientEntry,
  NonSensitivePatientEntry,
  PatientEntry
} from '../types';

const getNonSensitivePatientEntries = (): NonSensitivePatientEntry[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (entry: newPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: id,
    ...entry
  };

  patients.push(newPatientEntry);
  return newPatientEntry;
};

// const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
//   return diaries.map(({ id, date, weather, visibility }) => ({
//     id,
//     date,
//     weather,
//     visibility
//   }));
// };

export default {
  getNonSensitivePatientEntries,
  addPatient
};
