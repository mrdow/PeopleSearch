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
  birthDate: Date = new Date(Date.now());
  deathDate: Date;
  address: Address = new Address();
  interests: Interest[] = [];

  get age(): number {
    var endDate = this.deathDateAsDate() || new Date(Date.now());
    var startDate = this.birthDateAsDate();
    var ageDifMs = endDate.getTime() - startDate.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  birthDateAsDate(): Date {
    return new Date(this.birthDate);
  }

  deathDateAsDate(): Date {
    return this.deathDate ? new Date(this.deathDate) : null;
  }
}
