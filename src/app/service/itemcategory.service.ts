import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ItemCategory } from '../model/ItemCategory';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ItemcategoryService {

  private url = 'http://ekita-api.herokuapp.com/api/item-categories';

  constructor(private http : HttpClient) { }

  createItemCategory(ItemCategory: ItemCategory) {
    return this.http.post<ItemCategory>(this.url, ItemCategory);
  }

  public getItemCategories(): Observable<ItemCategory[]>{
    	return this.http.get<ItemCategory[]>(this.url);
    }
  deleteItemCategory(id: number) {
    	return this.http.delete(this.url + '/' + id);
  }
  getItemCategory(id: number): Observable<ItemCategory> {
    const url = `${this.url}/${id}`;
    return this.http.get<ItemCategory>(url).pipe(
      tap(_ => this.log(`fetched ItemCategory id=${id}`)),
      catchError(this.handleError<ItemCategory>(`getItemCategory id=${id}`))
    );
  }
  updateItemCategory (ItemCategory: ItemCategory): Observable<any> {
    return this.http.patch(this.url+'/'+ItemCategory.id, ItemCategory, httpOptions).pipe(
      tap(_ => this.log(`updated ItemCategory id=${ItemCategory.id}`)),
      catchError(this.handleError<any>('updateItemCategory'))
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
    private log(message: string) {
  }
}
