import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, } from 'rxjs/operators';

import { Image } from './image';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private imagesUrl = 'api/images';

  constructor(private http: HttpClient) { }

  getImageUrl(id: number): string {
    return `${this.imagesUrl}/${id}`;
  }

  /**
   * GET a image by id. Will be 404 if not found
   * @param id - the id of the image
   */
  getImage(id: number): Observable<Image> {
    const url = `${this.imagesUrl}/${id}`;

    return this.http.get<Image>(url)
      .pipe(
      catchError(this.handleError<Image>(`getImage id=${id}`))
      );
  }

  /**
   * PUT - update the image on the server
   * @param image - the image to update
   */
  updateImage(image: File, id: number): Observable<number> {
    const httpOptions = {
      headers: new HttpHeaders(
        //{ 'Content-Type': 'multipart/form-data' }
      )
    };

    const url = id === 0 ? this.imagesUrl : `${this.imagesUrl}/?id=${id}`;

    const formData: FormData = new FormData();
    formData.append('file', image, image.name);
    return this.http
      .put(url, formData, httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateImage'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
