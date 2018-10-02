import { Item } from './item';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ItemService {
    private itemsUrl = 'api/items';  // URL to web api

  constructor(private http: HttpClient, private messageService : MessageService) { }

getItem(id: number): Observable<Item> {
  const url = `${this.itemsUrl}/${id}`;
  return this.http.get<Item>(url).pipe(
    tap(_ => this.log(`fetched item id=${id}`)),
    catchError(this.handleError<Item>(`getItem id=${id}`))
  );
}
  /** Log a ItemService message with the MessageService */
private log(message: string) {
  this.messageService.add(`ItemService: ${message}`);
}

/** GET items from the server */
getItems (): Observable<Item[]> {
  return this.http.get<Item[]>(this.itemsUrl)
    .pipe(
      tap(items => this.log('fetched items')),
      catchError(this.handleError('getItems', []))
    );
}
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
addItem (item: Item): Observable<Item> {
  return this.http.post<Item>(this.itemsUrl, item, httpOptions).pipe(
    tap((item: Item) => this.log(`added item w/ id=${item.id}`)),
    catchError(this.handleError<Item>('addItem'))
  );
}
}