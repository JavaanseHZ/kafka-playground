import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:4200/api/contract';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ContractRestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getContracts(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

  getContract(id): Observable<any> {
    return this.http.get(endpoint + '/' + id).pipe(
      map(this.extractData));
  }

  addContract (contract): Observable<any> {
    console.log(contract);
    return this.http.post<any>(endpoint, JSON.stringify(contract), httpOptions).pipe(
      tap((resp) => console.log(`added contract w/ id=${resp.id}`)),
      catchError(this.handleError<any>('addContract')),
    );
  }

  updateContract (id, contract): Observable<any> {
    return this.http.put(endpoint + '/' + id, JSON.stringify(contract), httpOptions).pipe(
      tap(_ => console.log(`updated contract id=${id}`)),
      catchError(this.handleError<any>('updateContract')),
    );
  }

  deleteContract (id): Observable<any> {
    return this.http.delete<any>(endpoint + '/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted contract id=${id}`)),
      catchError(this.handleError<any>('deleteContract')),
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
