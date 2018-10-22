import { Address } from './address';
import { Interst } from './interest';

export class Person {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  deathDate: string;
  image: string;
  address: Address;
  intersts: Interst[];
}
