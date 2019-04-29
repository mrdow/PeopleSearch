import { Address } from './address';
import { Interest } from './interest';
import { Image } from './image';

export class Person {
  constructor(data: any = {}) {
    Object.assign(this, data);
  }

  id: number = 0;
  image: Image;
  firstName: string = '';
  lastName: string = '';
  birthDate: Date;
  deathDate: Date;
  address: Address = new Address();
  interests: Interest[] = [];

  birthDateAsDate(): Date {
    return new Date(this.birthDate);
  }

  deathDateAsDate(): Date {
    return this.deathDate ? new Date(this.deathDate) : null;
  }
}
