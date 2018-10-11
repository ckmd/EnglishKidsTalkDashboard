import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { QuestionDifficulty } from '../model/QuestionDifficulty';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class QuestionDifficultyService {

	private url = 'http://ekita-api.herokuapp.com/api/question-difficulties';

  constructor(private http : HttpClient) { }

  public getQuestionDifficulties(): Observable<QuestionDifficulty[]>{
    	return this.http.get<QuestionDifficulty[]>(this.url);
    }

  // getQuestionDifficulty(id: number) {
  //   return this.http.get<QuestionDifficulty>(this.url + '/' + id);
  // }
  getQuestionDifficulty(id: number): Observable<QuestionDifficulty> {
    const url = `${this.url}/${id}`;
    return this.http.get<QuestionDifficulty>(url).pipe(
      tap(_ => this.log(`fetched questionDifficulty id=${id}`)),
      catchError(this.handleError<QuestionDifficulty>(`getQuestionDifficulty id=${id}`))
    );
  }

    
	createQuestionDifficulty(questionDifficulty: QuestionDifficulty) {
    	return this.http.post<QuestionDifficulty>(this.url, questionDifficulty);
  }

    deleteQuestionDifficulty(id: number) {
    	return this.http.delete(this.url + '/' + id);
  }

  // updateQuestionDifficulty(questionDifficulty: QuestionDifficulty){
  //     return this.http.put<any>(this.url, questionDifficulty);
  // }
  updateQuestionDifficulty (questionDifficulty: QuestionDifficulty): Observable<any> {
    return this.http.put(this.url+'/'+questionDifficulty.id, questionDifficulty, httpOptions).pipe(
      tap(_ => this.log(`updated questionDifficulty id=${questionDifficulty.id}`)),
      catchError(this.handleError<any>('updateQuestionDifficulty'))
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
