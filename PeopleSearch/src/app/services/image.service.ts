import { Injectable, Inject } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Observable, Observer } from 'rxjs';

import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private sanitizer: DomSanitizer) { }

  processImage(file: File): Observable<Image> {
    return Observable.create((observer: Observer<Image>) => {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        let image = new Image();
        let dataUrl = fileReader.result.toString();
        let base64String = dataUrl.substr(dataUrl.indexOf(",") + 1);
        image.file = base64String;
        image.contentType = file.type;
        image.name = file.name;

        observer.next(image);
        observer.complete();
      }
      fileReader.readAsDataURL(file);
    });
  }

  sanitize(image: Image): SafeUrl {
    let unsafeUrl = `data:${image.contentType};base64,${image.file}`;
    return this.sanitizer.bypassSecurityTrustUrl(unsafeUrl);
  }
}
