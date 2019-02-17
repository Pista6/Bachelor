import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Options } from './options';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  // dataCisco = "api/cisco";
  // dataBitcoin = "api/bitcoin";

  constructor(private http: HttpClient) { }

  // getData(dataURL: string, options: string): Observable<Object> {
  //   const url = "api/" + dataURL;
  //   return null;
  //   .pipe(
  //     tap(_ => this.log('fetched heroes')),
  //     catchError(this.handleError('getHeroes', []))
  //   );
  // }
    getData(optionData: string): Observable<Object>{
      // return this.http.get<Object>('api/' + option);
      return this.http.get<Object>('api/'+ optionData);

    }

}
