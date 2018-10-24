import { Component, AfterViewChecked, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

import { Person } from '../person';
import { Image } from '../image';
import { AddressFormComponent } from '../address-form/address-form.component';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.scss']
})
export class PersonFormComponent implements AfterViewChecked {
  @ViewChild('personForm') public form: NgForm;
  @ViewChild('addressForm') public addressForm: AddressFormComponent;

  @Output() onValidationChanged = new EventEmitter<boolean>();
  @Input() imageUrl: string;
  private _person: Person;
  @Input('person')
  set person(value: Person) {
    this._person = value;
    if (this.person && this.person.image) {
      this.sanitize();
    }
  }
  get person(): Person {
    return this._person;
  }

  public isValid: boolean;
  safeUrl: SafeUrl;
  image: File;

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngAfterViewChecked() {
    this.isValid = this.form.valid && this.addressForm.isValid;
    this.onValidationChanged.emit(this.isValid);
  }

  processImage(imageInput: any) {
    this.image = imageInput.files[0];

    var fr = new FileReader();
    fr.onload = () => {
      if (!this.person.image) {
        this.person.image = new Image();
      }
      let dataUrl = fr.result.toString();
      let base64String = dataUrl.substr(dataUrl.indexOf(",") + 1);
      this.person.image.file = base64String;
      this.person.image.contentType = this.image.type;
      this.person.image.name = this.image.name;
      this.sanitize();
    }
    fr.readAsDataURL(this.image);
  }

  bufferToBase64(buf) {
    var binstr = Array.prototype.map.call(buf, function (ch) {
      return String.fromCharCode(ch);
    }).join('');
    return btoa(binstr);
  }

  base64ToBuffer(base64) {
    var binstr = atob(base64);
    var buf = new Uint8Array(binstr.length);
    Array.prototype.forEach.call(binstr, function (ch, i) {
      buf[i] = ch.charCodeAt(0);
    });
    return buf;
  }

  sanitize() {
    if (this.person.image.file) {
      let unsafeUrl = `data:${this.person.image.contentType};base64,${this.person.image.file}`
      this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
    }
  }

  processDate(event: any) {
    this.person.deathDate = event.target.value;
  }
}
