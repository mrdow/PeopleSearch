import { Component, OnInit, Input } from '@angular/core';

import { Person } from '../person';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements OnInit {
  @Input() person: Person;
  @Input() imageUrl: string;

  image: File;
  imageString: string;

  constructor() { }

  ngOnInit() {
  }

  processImage(imageInput: any) {
    this.image = imageInput.files[0];
    
    var fr = new FileReader();
    fr.onload = () => this.imageString = fr.result as string;
    fr.readAsDataURL(this.image);
  }

  processDate(event: any) {
    this.person.deathDate = event.target.value;
  }
}
