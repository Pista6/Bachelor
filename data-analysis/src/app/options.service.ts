import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DataFromServer } from './dataFromServer';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Options } from './options';

@Injectable({
  providedIn: 'root'
})

export class OptionsService {

  dataFromServer: DataFromServer[];

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

  getData(optionData: Options):Observable<JSON> {
    const options = optionData ?
     { params: new HttpParams()
      .set('dataset', optionData.dataset)
      .set('algorithm', optionData.algorithm)
      .set('startDate', optionData.startDate)
      .set('endDate', optionData.endDate) } : {};

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json',
    //     'body': JSON.stringify(optionData)
    //   })
    // };
    return this.http.get<JSON>('localhost:8040/haskell/analytics', options);

  }

}
