import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { QuestionCategory } from '../model/QuestionCategory';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class QuestioncategoryService {

	private url = 'http://ekita-api.herokuapp.com/api/question-categories';

  constructor(private http : HttpClient) { }

  createQuestionCategory(questionCategory: QuestionCategory) {
    return this.http.post<QuestionCategory>(this.url, questionCategory);
  }

  public getQuestionCategories(): Observable<QuestionCategory[]>{
    	return this.http.get<QuestionCategory[]>(this.url);
    }
  deleteQuestionCategory(id: number) {
    	return this.http.delete(this.url + '/' + id);
  }
  getQuestionCategory(id: number): Observable<QuestionCategory> {
    const url = `${this.url}/${id}`;
    return this.http.get<QuestionCategory>(url).pipe(
      tap(_ => this.log(`fetched questionCategory id=${id}`)),
      catchError(this.handleError<QuestionCategory>(`getQuestionCategory id=${id}`))
    );
  }
  updateQuestionCategory (questionCategory: QuestionCategory): Observable<any> {
    return this.http.patch(this.url+'/'+questionCategory.id, questionCategory, httpOptions).pipe(
      tap(_ => this.log(`updated questionCategory id=${questionCategory.id}`)),
      catchError(this.handleError<any>('updateQuestionCategory'))
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
