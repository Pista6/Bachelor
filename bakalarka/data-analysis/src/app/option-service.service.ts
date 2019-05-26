import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Options } from './options';

@Injectable({
  providedIn: 'root'
})

export class OptionsService {

  constructor(private http: HttpClient) { }

  // getData(dataURL: string, options: string): Observable<Object> {
  //   const url = "api/" + dataURL;
  //   return null;
  //   .pipe(
  //     tap(_ => this.log('fetched heroes')),
  //     catchError(this.handleError('getHeroes', []))
  //   );
  // }

  // getData(optionData: string): Observable<DataFromServer[]>{
  //   // return this.http.get<Object>('api/' + option);
  //   return this.http.get<DataFromServer[]>('api/'+ optionData);

  // }

  getData(optionData: Options) {
    const options = optionData ?
     { params: new HttpParams()
      .set('dataset', optionData.dataset)
      .set('algorithm', optionData.algorithm)
      .set('startDate', optionData.startDate)
      .set('endDate', optionData.endDate) } : {};
      
    return this.http.get('http://haskell.localhost:8040/analytics', options);

  }

}
