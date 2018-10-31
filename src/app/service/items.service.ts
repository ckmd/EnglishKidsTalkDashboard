import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Item } from '../model/Item';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private url = 'http://ekita-api.herokuapp.com/api/items';

  constructor(private http: HttpClient) {
  }
  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  }
  createItem(item: Item) {
    return this.http.post<Item>(this.url, item);
  }

  deleteItem(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
  getItem(id: number): Observable<Item> {
    const url = `${this.url}/${id}`;
    return this.http.get<Item>(url).pipe(
      tap(_ => this.log(`fetched item id=${id}`)),
      catchError(this.handleError<Item>(`getItem id=${id}`))
    );
  }
  updateItem(item: Item): Observable<any> {
    return this.http.patch(this.url + '/' + item.id, item, httpOptions).pipe(
      tap(_ => this.log(`updated item id=${item.id}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
  }

}
