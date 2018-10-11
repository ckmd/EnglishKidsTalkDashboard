import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { LearningItem } from '../model/learning-item';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LearningitemService {

  private learningItemsUrl = 'http://ekita-api.herokuapp.com/api/Learning-items';  // URL to web api

  constructor(
  	private http : HttpClient
  	) { }

  createLearningItem(learningItem: LearningItem) {
    return this.http.post<LearningItem>(this.learningItemsUrl, learningItem);
  }
  public getLearningItems(): Observable<LearningItem[]>{
    	return this.http.get<LearningItem[]>(this.learningItemsUrl);
  }
  deleteLearningItem(id: number) {
    	return this.http.delete(this.learningItemsUrl + '/' + id);
  }
  getLearningItem(id: number): Observable<LearningItem> {
    const url = `${this.learningItemsUrl}/${id}`;
    return this.http.get<LearningItem>(url).pipe(
      tap(_ => this.log(`fetched learningItem id=${id}`)),
      catchError(this.handleError<LearningItem>(`getLearningItem id=${id}`))
    );
  }
  updateLearningItem (learningItem: LearningItem): Observable<any> {
    return this.http.put(this.learningItemsUrl+'/'+learningItem.id, learningItem, httpOptions).pipe(
      tap(_ => this.log(`updated learningItem id=${learningItem.id}`)),
      catchError(this.handleError<any>('updateLearningItem'))
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
