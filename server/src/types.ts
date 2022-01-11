export enum Weather {
  Sunny = 'sunny',
  Rainy = 'rainy',
  Cloudy = 'cloudy',
  Stormy = 'stormy',
  Windy = 'windy'
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

export interface DiaryEntry {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment?: string;
}

export interface DiagnosesEntry {
  code: string;
  name: string;
  latin?: string;
}

export interface PatientEntry {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn?: string;
  gender: Gender;
  occupation: string;
}

export type NonSensitiveDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type NonSensitivePatientEntry = Omit<PatientEntry, 'ssn'>;

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>;

export type newPatientEntry = Omit<PatientEntry, 'id'>;
