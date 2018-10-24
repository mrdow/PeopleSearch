import { Address } from './address';
import { Interest } from './interest';
import { Image } from './image';

export class Person {
  id: number;
  image: Image = new Image();
  firstName: string;
  lastName: string;
  birthDate: string;
  deathDate: string;
  address: Address = new Address();
  interests: Interest[] = [];
}
