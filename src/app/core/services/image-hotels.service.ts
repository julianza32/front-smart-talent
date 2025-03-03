import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponseHits, IResponseImages } from '../interfaces/response_images.interface';
import { firstValueFrom, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageHotelsService {

  constructor(private readonly http: HttpClient) { }

   
  getRoomsImages(page: string, perPage: string): Observable<IResponseHits[]> {
    return this.http.get<IResponseImages>(
      `https://pixabay.com/api/?key=49125323-d2b543bf4a21e573184a93401&q=rooms+hotels&image_type=photo&page=${page}&per_page=${perPage}`
    ).pipe(map(response => response.hits)); 
  }
  getHotelsImages(page: string, perPage: string): Observable<IResponseHits[]> {
    return this.http.get<IResponseImages>(
      `https://pixabay.com/api/?key=49125323-d2b543bf4a21e573184a93401&q=hotels&image_type=photo&page=${page}&per_page=${perPage}`
    ).pipe(map(response => response.hits)); 
  }

}
