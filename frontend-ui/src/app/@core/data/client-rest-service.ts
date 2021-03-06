import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const endpoint = '/client/api/client';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ClientRestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getClients(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

  getClient(id): Observable<any> {
    return this.http.get(endpoint + '/' + id).pipe(
      map(this.extractData));
  }

  addClient (client): Observable<any> {
    console.log(client);
    return this.http.post<any>(endpoint, JSON.stringify(client), httpOptions).pipe(
      tap((resp) => console.log(`added client w/ id=${resp.id}`)),
    );
  }

  updateClient (id, client): Observable<any> {
    return this.http.put(endpoint + '/' + id, JSON.stringify(client), httpOptions).pipe(
      tap(_ => console.log(`updated client id=${id}`)),
    );
  }

  deleteClient (id): Observable<any> {
    return this.http.delete<any>(endpoint + '/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted client id=${id}`)),
    );
  }

}
