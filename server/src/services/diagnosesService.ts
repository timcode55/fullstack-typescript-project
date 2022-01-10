import diagnoses from '../../data/diagnoses';

import { DiagnosesEntry } from '../types';

const getDiagnoses = (): Array<DiagnosesEntry> => {
  return diagnoses.map(({ code, name, latin }) => ({
    code,
    name,
    latin
  }));
};

export default {
  getDiagnoses
};
