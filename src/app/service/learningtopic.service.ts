import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { LearningTopic } from '../model/LearningTopic';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LearningtopicService {

	private url = 'http://ekita-api.herokuapp.com/api/learning-topics';

  constructor(private http : HttpClient) { }

  public getLearningTopics(): Observable<LearningTopic[]>{
    	return this.http.get<LearningTopic[]>(this.url);
    }
  createLearningTopic(learningTopic: LearningTopic) {
    return this.http.post<LearningTopic>(this.url, learningTopic);
  }
  deleteLearningTopic(id: number) {
    	return this.http.delete(this.url + '/' + id);
  }
  getLearningTopic(id: number): Observable<LearningTopic> {
    const url = `${this.url}/${id}`;
    return this.http.get<LearningTopic>(url).pipe(
      tap(_ => this.log(`fetched learningTopic id=${id}`)),
      catchError(this.handleError<LearningTopic>(`getLearningTopic id=${id}`))
    );
  }
  updateLearningTopic (learningTopic: LearningTopic): Observable<any> {
    return this.http.put(this.url+'/'+learningTopic.id, learningTopic, httpOptions).pipe(
      tap(_ => this.log(`updated learningTopic id=${learningTopic.id}`)),
      catchError(this.handleError<any>('updateLearningTopic'))
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
