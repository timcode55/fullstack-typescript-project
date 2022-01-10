import patients from '../../data/patients';

import { PatientEntry } from '../types';

const getPatients = (): Array<PatientEntry> => {
  return patients.map(({ id, name, dateOfBirth, ssn, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation
  }));
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
  getPatients
};
