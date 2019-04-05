import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataFromServer } from './dataFromServer';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

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

    getData(optionData: string): Observable<DataFromServer[]>{
      // return this.http.get<Object>('api/' + option);
      return this.http.get<DataFromServer[]>('api/'+ optionData);

    }

}
