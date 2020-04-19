import { Instructor } from './Instructor';

export interface Curso {
  id: number;
  cap: number;
  instructors: Array<Instructor>;
}
